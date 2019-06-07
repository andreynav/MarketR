/* eslint-disable new-cap */
import { Selector } from 'testcafe'
import { Page } from './page-model'

class CabinetFavoritePage extends Page {
  constructor() {
    super()
    this.titleOfPage = Selector('h1').withText('Избранное')
  }
}

export { CabinetFavoritePage }
