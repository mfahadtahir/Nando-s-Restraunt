import React, { Component } from 'react';
import Slider from 'react-slick';
import M from 'materialize-css';
import img from '../../Images/drumstick.jpg'
import '../../index.css';

class ProductSlider extends Component {
  componentDidMount(){
    M.AutoInit();
  }
    render() {
        var { data, styleClass } = this.props,
        newsTemplate,
        settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: data.length > 4 ? 4: data.length,
            slidesToScroll: 2,
            rtl: true,
            arrows: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  arrows: true,
                  slidesToShow: data.length > 3 ? 3 : data.length,
                  slidesToScroll: 3,
                  infinite: true,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  arrows: true,
                  slidesToShow: data.length > 2 ? 2 : data.length,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: true,
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        }
        if (data.length > 2) {
            newsTemplate = data.map(function (item, index) {
                return (
                    <div key={index}  >
                        <div className={"dish card verticleCards " + styleClass} >
                          <div className="card-image">
                            <img src={img} alt='' style={{maxHeight: 200}}  />
                          </div>
                          <p className="productName card-title activator" style={{fontSize: 16, marginBottom: 0, fontFamily: 'Cormorant Garamond'}} >
                            {item.name}
                            <i className="material-icons right">more_vert</i></p>
                          <p className="card-content" style={{fontSize: 12, paddingTop: 0, padding: 5}}>{item.description}</p>
                          <div className="card-reveal" style={{padding: 12}} >
                            <div className="card-title deep-orange-text text-darken-4">Sub Items<i className="material-icons right">close</i></div>
                            <div  className='divider' style={{marginBottom: 15}}></div>
                            
                            {item['sub-items'].map((subItem, key) => 
                            <div key={key} >
                              <span style={{fontSize: 13}} className="card-title grey-text text-darken-4">{subItem.name}
                                <span className="right" style={{fontSize: 12, color: '#f57f17'}} >{subItem.price}</span>
                              </span>
                              <span style={{fontSize: 12}} className="grey-text text-darken-4" >{subItem.category_name}
                                <span className="right" style={{fontSize: 12}}>{subItem.cuisine_name}</span>
                              </span>
                              <div className='divider' style={{marginBottom: 15}}></div>
                            </div>
                            )}
                          </div>
                        </div>
                    </div>
                )
            })
          } 
        else if(data.length > 0){
          newsTemplate = data.map(function (item, index) {
            return (
                <div key={index}  >
                    <div className={"dish horizontal horizontalCards card " + styleClass  } >
                      <div className="card-image">
                        <img src={img} alt='' style={{maxHeight: 500}}  />
                      </div>
                      <div className='card-stacked'>
                      <p className="productName card-title activator" style={{fontSize: 16, paddingTop: 0,padding: 16, marginTop: 0, fontFamily: 'Cormorant Garamond'}} >{item.name}<i className="material-icons right">more_vert</i></p>
                      <p className="card-content" style={{fontSize: 12, padding: 15, paddingTop: 0, marginTop: 0}}>{item.description}</p>

                      </div>
                      <div className="card-reveal" style={{padding: 12}} >
                        <div className="card-title deep-orange-text text-darken-4">Sub Items<i className="material-icons right">close</i></div>
                        <div  className='divider' style={{marginBottom: 15}}></div>
                        
                        {item['sub-items'].map((subItem, key) => 
                        <div key = { key }>
                          <span style={{fontSize: 13}} className="card-title grey-text text-darken-4">{subItem.name}<span className="right" style={{fontSize: 12, color: '#f57f17'}} >{subItem.price}</span></span>
                          <span style={{fontSize: 12}} className="grey-text text-darken-4" >{subItem.category_name}<span className="right" style={{fontSize: 12}}>{subItem.cuisine_name}</span></span>
                          <div className='divider' style={{marginBottom: 15}}></div>
                        </div>
                        )}
                      </div>
                    </div>
                </div>
            )
        })

        }
        else {
            return null
        }
        return (
            <div>
                <Slider {...settings}>{newsTemplate}</Slider>
            </div>
        );
    }
};
export default ProductSlider