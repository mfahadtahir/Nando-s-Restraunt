import React, {Component} from 'react'
import { Data } from '../Data/Data'

class ContactUs extends Component {
  render(){
    return(
    <div id="contactus" className='container-fluid' style={{textAlign: 'center', marginTop: 30}}>
      <div className='row' >
        <div
          className='col s12 m6 offset-l1 l5'
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
          style={styleBox.leftBox}
        >
        <div className="container-fluid" >
          <h5 style={styleBox.heading} >How to Find {" & "} Contact Us</h5>
          <p style={{ display: 'flex', justifyContent: 'space-around'}} >
            <span>Monday   </span> <span>{Data['restaurant-time-info']['mon'][0].open + " - " + Data['restaurant-time-info']['mon'][0].close}</span></p>
          <p style={{ display: 'flex', justifyContent: 'space-around'}} >
            <span>Tuesday  </span> <span>{Data['restaurant-time-info']['tue'][0].open + " - " + Data['restaurant-time-info']['tue'][0].close}</span></p>
          <p style={{ display: 'flex', justifyContent: 'space-around'}} >
            <span>Wednesday</span> <span>{Data['restaurant-time-info']['wed'][0].open + " - " + Data['restaurant-time-info']['wed'][0].close}</span></p>
          <p style={{ display: 'flex', justifyContent: 'space-around'}} >
            <span>Thrusday </span> <span>{Data['restaurant-time-info']['thu'][0].open + " - " + Data['restaurant-time-info']['thu'][0].close}</span></p>
          <p style={{ display: 'flex', justifyContent: 'space-around'}} >
            <span>Friday   </span> <span>{Data['restaurant-time-info']['fri'][0].open + " - " + Data['restaurant-time-info']['fri'][0].close}</span></p>
          <p style={{ display: 'flex', justifyContent: 'space-around'}} >
            <span>Saturday </span> <span>{Data['restaurant-time-info']['sat'][0].open + " - " + Data['restaurant-time-info']['sat'][0].close}</span></p>
          <p style={{ display: 'flex', justifyContent: 'space-around'}} >
            <span>Sunday   </span> <span>{Data['restaurant-time-info']['sun'][0].open + " - " + Data['restaurant-time-info']['sun'][0].close}</span></p>

        </div>
        </div>
        <div        
          className='col s12 m6 l5'
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
          style={styleBox.RightBox}
        >
        <div className='container-fluid' style={{marginTop: 50, overflow: 'hidden', position: 'relative'}}>
          <iframe 
            width="360" 
            height="400"
            src="https://maps.google.com/maps?hl=en&amp;q=road-11 banani, dhaka+()&amp;ie=UTF8&amp;t=p&amp;z=15&amp;iwloc=B&amp;output=embed" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight="0" 
            marginWidth="0"
            title='location'
            >
            </iframe>
            <div style={{position: "absolute", width: '80%', bottom: 10, left: 0, right: 0, marginLeft: 'auto',marginRight: 'auto',color: '#000',textAlign: 'center'}}>
              <small style={{lineHeight: 1.8,fontSize: 0, background: '#fff'}}>
                 <a href="https://googlemapsembed.net/">
                 Embed Google Map
                 </a>
              </small>
            </div>
          </div>

        </div>
      </div>
    </div>
    )
  }
}
const styleBox = {
  leftBox: {
    background: 'rgb(239,239,239,0.8)',
    height: 500, 
    display: 'inline-block'
  },
  heading : {
    fontFamily: 'Cormorant Garamond',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  RightBox: {
    background: 'rgb(239,239,239,0.8)',
    height: 500, 
    display: 'inline-block'
  }
}

export default ContactUs