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

     data: {}

    }
  },



  componentWillMount() {

    store.subscribe(() => {

      const appSt = store.getState()

      // console.log(appSt)  

      this.setState({

        data: appSt.eData

      })
    })
  },

  

  render() {

    console.log(this.state.data)

    return (



      <div 
        className="cItemCont">

        <div 
          className="cItemContInner">

          <img 
            alt="##"
            className="cItemImg" 
            src="kjhg"
          />

          <div 
            className="cItemTitle">
            Title
          </div>

          <div 
            className="cShpPrcCont">

            <div 
            className="cItemStore">
            Store
            </div>

            <div 
              className="cItemCost">
            </div>

          </div>

          <div 
            className="cHambBtn">

            <div 
              className="cHamb">
              <i 
                className="fa fa-bars" aria-hidden="true">
              </i>
            </div>
                <div 
                  className="cArr">
                  <i 
                    className="fa fa-sort-desc" aria-hidden="true">
                  </i>
                </div>
                                
              </div>

              <div 
                className="cHeart">
                <i 
                  className="fa fa-heart" aria-hidden="true">
                </i>
              </div>

         </div> 

      </div>



    )

  }

}) 