import { DbFake } from '../db/DbFake'
import { BadRequest, NotFound } from '../utils/Errors'

class BurgersService {
  getById(id) {
    const found = DbFake.burgers.find(b => b.id.toString() === id)
    if (!found) {
      throw new NotFound('No burger exists with the id of ' + id)
    }
    return found
  }

  async createBurger(burgerData) {
    const found = DbFake.burgers.find(b => b.name === burgerData.name)
    if (found) {
      throw new BadRequest('this burger already exists')
    }
    burgerData.id = Math.floor(Math.random() * 1000000000)

    DbFake.burgers.push(burgerData)
    return burgerData
  }

  async deleteById(burgerId) {
    const found = DbFake.burgers.find(b => b.id.toString() === burgerId)
    if (!found) {
      throw new NotFound('No burger exists with the id of ' + burgerId)
    } DbFake.burgers = DbFake.burgers.filter(b => b.id.toString() !== burgerId)
    return DbFake.burgers
  }
}

export const burgersService = new BurgersService()
