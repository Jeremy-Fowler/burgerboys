import { DbFake } from '../db/DbFake'
import { burgersService } from '../services/BurgersService'
import BaseController from '../utils/BaseController'

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getBurgers)
      .get('/:id', this.getBurger)
      .post('', this.createBurger)
      .delete('/:id', this.deleteBurger)
  }

  async getBurger(req, res, next) {
    try {
      const id = req.params.id
      const burger = await burgersService.getById(id)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async getBurgers(req, res, next) {
    res.send(DbFake.burgers)
  }

  async createBurger(req, res, next) {
    try {
      const newBurger = await burgersService.createBurger(req.body)
      res.send(newBurger)
    } catch (error) {
      next(error)
    }
  }

  async deleteBurger(req, res, next) {
    try {
      const burgerId = req.params.id
      await burgersService.deleteById(burgerId)
      res.send(DbFake.burgers)
    } catch (error) {
      next(error)
    }
  }
}
