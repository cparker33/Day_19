import React from 'react' 
import store from '../store'
import { getData } from '../api/etsy';

/*
import $ from 'jquery'


function getData() {

  // console.log("getDat")

  $.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?', function(data){
      // console.log('reswults ' + data.results)
    store.dispatch({
      type: 'GET_DATA',
      action: data.results
    })
  })
}
*/

// git@github.com:cparker33/Day_19.git

getData()

export default React.createClass({

  getInitialState() {

    return {

     data: []

    }
  },



  componentWillMount() {

    store.subscribe(() => {

      const appSt = store.getState()

      // console.log('Mount ', appSt.eData[0].length)  

      this.setState({

        data: appSt.eData[0]

      })
    })
  },

  componentWillUnmount(){

    store.unsubscribe()

  },


  

  render() {

    // console.log('Test ')
    // console.log('render ', this.state.data)
    

    return (

      <div id="cMidItemList">

    {
      this.state.data.map((obj, i) => {

        return (

          <div key={'cpar' + i} className="cItemCont">

            <div className="cItemContInner">

              <img className="cItemImg" alt=" " src={obj.Images[0].url_fullxfull} />

              <div className="cItemTitle">{obj.title}</div>


              <div className="cShpPrcCont">

                <div className="cItemStore">{obj.Shop.shop_name}</div>

                <div className="cItemCost">{'$' + obj.price}</div>

              </div>

                  <div className="cItemHoverMenu">

                    <div className="cHambBtn">

                      <div className="cHamb"><i className="fa fa-bars" aria-hidden="true"></i></div>
                      <div className="cArr"><i className="fa fa-sort-desc" aria-hidden="true"></i></div>
                                
                    </div>

                    <div className="cHeart" ><i className="fa fa-heart" aria-hidden="true"></i></div>


                  </div>

              </div>

        </div>


        )

      })
      
     } 
     </div>
    

    )

  }

}) 