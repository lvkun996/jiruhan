
const getItem = () => window.localStorage.getItem('GabmbleCount')

const setItem = (count) => window.localStorage.setItem('GabmbleCount', count)

class GabmbleOp {

  count = 0


  constructor () {

  }

  getCount () {
    return getItem()
  }

  change (count) {

    const oldCount = !!getItem() ? Number(getItem()) : 0

    const newCount =  oldCount + count

    setItem(newCount)
    
  }

}


export default new GabmbleOp()