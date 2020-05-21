import React, {Component} from 'react'
import { Data } from '../Data/Data'

class AboutUs extends Component {
  render(){
    return(
    <div id="aboutus" className='container-fluid' style={{ marginTop: 30}}>
      <div className='row' >
        <div        
          className='col offset-s1 s10 offset-m1 m10 offset-l1 l10'
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
          style={styleBox.mainBox}
        >
        <div className='container-fluid' >
          <div className='row' >
            <div className='col s12 m12 l6' >
              <h3 style={styleBox.heading} >About US</h3>
              <p className='aboutUsText'  style={{overflow: 'hidden !important', paddingLeft: 30, paddingRight: 30, fontSize: 12, color: '#9f9f9f'}} >
                The Nando’s story started centuries ago, when the Portuguese explorers set sail for the East. The winds of Africa called them ashore and it was there that they were introduced to the African Bird’s Eye Chilli – more commonly known as PERi-PERi. A spice like no other, they used it to create a unique PERi-PERi sauce that put fire in their bellies and ignited passion in their souls. It was the same PERi-PERi flavour that inspired Fernando Duarte to invite his friend Robbie Brozin to a humble Portuguese eatery in the heart of Rosettenville, South Africa in 1987. After just one bite of the mouth-watering PERi-PERi marinated and basted chicken, they knew it was a taste that had to be shared. Right from the start, our two founders had great ambitions for their small business. The next few years passed in a blur of long hours and hot kitchens. Riding on the back of their food’s growing reputation, Robbie and Fernando opened a second restaurant, in Savoy, North Johannesburg. And then another - always flying by the seat of their pants, taking risks, feeling as though they could fail at any moment. From the very beginning, the founders wanted Nando’s to be more than chicken and profit. Their slogan in the early days was “have fun and then make money” but always in the right way, giving people opportunities and making a positive impact on their lives. The rest is history! Today, you can find Nando’s restaurants and our addictive grocery range right around the world. Whether you’re a first-time visitor or an old friend, we can’t wait to welcome you!
              </p>

            </div>

            <div className='col s12 m12 l6' >
              <h3 style={styleBox.heading} >Our Reach!</h3>
              <p style={{fontStyle: 'italic', color: '#9f9f9f', marginLeft: 100}} ><i className='material-icons' style={{marginRight: 10, color: 'green'}} >check</i>{Data["restaurant-info"]["deliverable-area"][0].name}</p>
              <p style={{fontStyle: 'italic', color: '#9f9f9f', marginLeft: 100}} ><i className='material-icons' style={{marginRight: 10, color: 'green'}} >check</i>{Data["restaurant-info"]["deliverable-area"][1].name}</p>
              <p style={{fontStyle: 'italic', color: '#9f9f9f', marginLeft: 100}} ><i className='material-icons' style={{marginRight: 10, color: 'green'}} >check</i>{Data["restaurant-info"]["deliverable-area"][2].name}</p>
              <p style={{fontStyle: 'italic', color: '#9f9f9f', marginLeft: 100}} ><i className='material-icons' style={{marginRight: 10, color: 'green'}} >check</i>{Data["restaurant-info"]["deliverable-area"][3].name}</p>
              <p style={{fontStyle: 'italic', color: '#9f9f9f', marginLeft: 100}} ><i className='material-icons' style={{marginRight: 10, color: 'green'}} >check</i>{Data["restaurant-info"]["deliverable-area"][4].name}</p>
              <p style={{fontStyle: 'italic', color: '#9f9f9f', marginLeft: 100}} ><i className='material-icons' style={{marginRight: 10, color: 'green'}} >check</i>{Data["restaurant-info"]["deliverable-area"][5].name}</p>
              <p style={{fontStyle: 'italic', color: '#9f9f9f', marginLeft: 100}} ><i className='material-icons' style={{marginRight: 10, color: 'green'}} >check</i>{Data["restaurant-info"]["deliverable-area"][6].name}</p>
              <p style={{fontStyle: 'italic', color: '#9f9f9f', marginLeft: 100}} ><i className='material-icons' style={{marginRight: 10, color: 'green'}} >check</i>{Data["restaurant-info"]["deliverable-area"][7].name}</p>

            </div>

          </div>
        </div>
       </div>
      </div>
    </div>
    )
  }
}
const styleBox = {

  mainBox: {
    background: 'rgb(239,239,239,0.8)',
    display: 'inline-block'
  },
  heading : {
    fontFamily: 'Cormorant Garamond',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
}

export default AboutUs