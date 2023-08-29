import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

export default class IndexController {
  constructor (private readonly model: IndexModel, private readonly view: IndexView) {
    this.init()
  }

  init = (): void => {
    this.view.render(this.model.getData())
  }
}
