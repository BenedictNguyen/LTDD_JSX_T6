import React from 'react';
import { Text, Image, View, TouchableOpacity, label} from 'react-native';
import Image1 from '../assets/screen1/img1.png';
import Image2 from '../assets/screen1/img2.png';
import Image3 from '../assets/screen1/img3.png';
import Image4 from '../assets/screen1/img4.png';
import Image5 from '../assets/screen1/img5.png';
import Image6 from '../assets/screen1/img6.png';
import arrowIcon from '../assets/screen1/arrow.png';
import findIcon from '../assets/screen1/findicon.png';
import gioHang from '../assets/screen1/giohang.png';
import indexIcon from '../assets/screen1/index.png';
import group from '../assets/screen1/Group.png';
import Home from '../assets/screen1/home.png';
import Arrow from '../assets/screen1/arrow2.png';
import Index2 from '../assets/screen1/index2.png';
const screen1 = () => {
  return (
    <View style = {{
      //paddingTop: 20,
      flexDirection: 'column  ',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%'
    }}>
      <View style = {{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style = {{
          flexDirection: 'row',
          backgroundColor: 'rgba(27, 169, 255, 1)',
          height: 50,
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <TouchableOpacity style = {{
            paddingLeft: 10
          }}>
            <Image source = {arrowIcon} alt = 'arrow'/>
          </TouchableOpacity>

          <TouchableOpacity style = {{
            flexDirection: 'row',
            alignItems: 'center',
            width: 192,
            height: 30,
            backgroundColor: 'rgba(255, 255, 255, 1)',
          }}>
            <Image style = {{
              margin: 8
            }} source = {findIcon} alt = 'findicon'/>
          </TouchableOpacity> 
          
          <TouchableOpacity> 
            <Image source = {gioHang} alt = 'giohang'/>
          </TouchableOpacity>
          <TouchableOpacity style = {{
            paddingRight: 10
          }}>
            <Image source = {indexIcon} alt = 'index'/>
          </TouchableOpacity>
        </View>
      </View>

      <View style = {{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style = {{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <TouchableOpacity style = {{
            paddingRight: 50
          }}>
            <Image source = {Image1} alt = 'img1'/>
            <Text>Cáp chuyển từ Cổng{'\n'}USB sang PS2...</Text>
            <Image style = {{width: 106, height: 13}} source = {group} alt = 'Group'/>
            <View style = {{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Text style = {{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: 12
              }}>69.900 đ</Text>
               <Text style = {{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: 12,
                color: 'rgba(150, 157, 170, 1)'
              }}>-39 %</Text>
            </View>
          </TouchableOpacity>
         
          <TouchableOpacity>
            <Image source = {Image2} alt = 'img2'/>
            <Text>Cáp chuyển từ Cổng{'\n'}USB sang PS2...</Text>
            <Image style = {{width: 106, height: 13}} source = {group} alt = 'Group'/>
            <View style = {{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Text style = {{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: 12
              }}>69.900 đ</Text>
               <Text style = {{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: 12,
                color: 'rgba(150, 157, 170, 1)'
              }}>-39 %</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style = {{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10
        }}>
        <TouchableOpacity style = {{
            paddingRight: 50
          }}>
            <Image source = {Image3} alt = 'img3'/>
            <Text>Cáp chuyển từ Cổng{'\n'}USB sang PS2...</Text>
            <Image style = {{width: 106, height: 13}} source = {group} alt = 'Group'/>
            <View style = {{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Text style = {{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: 12
              }}>69.900 đ</Text>
               <Text style = {{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: 12,
                color: 'rgba(150, 157, 170, 1)'
              }}>-39 %</Text>
            </View>
          </TouchableOpacity>
         
        <View style = {{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10
        }}>
          <TouchableOpacity>
            <Image source = {Image4} alt = 'img4'/>
            <Text>Cáp chuyển từ Cổng{'\n'}USB sang PS2...</Text>
            <Image style = {{width: 106, height: 13}} source = {group} alt = 'Group'/>
            <View style = {{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Text style = {{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: 12
              }}>69.900 đ</Text>
               <Text style = {{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: 12,
                color: 'rgba(150, 157, 170, 1)'
              }}>-39 %</Text>
            </View>
          </TouchableOpacity>
        </View>
        </View>

       <View style = {{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 20
        }}>
        <TouchableOpacity style = {{
            paddingRight: 50
          }}>
            <Image source = {Image5} alt = 'img5'/>
            <Text>Cáp chuyển từ Cổng{'\n'}USB sang PS2...</Text>
            <Image style = {{width: 106, height: 13}} source = {group} alt = 'Group'/>
            <View style = {{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Text style = {{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: 12
              }}>69.900 đ</Text>
               <Text style = {{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: 12,
                color: 'rgba(150, 157, 170, 1)'
              }}>-39 %</Text>
            </View>
          </TouchableOpacity>
         
          <TouchableOpacity>
            <Image source = {Image6} alt = 'img6'/>
            <Text>Cáp chuyển từ Cổng{'\n'}USB sang PS2...</Text>
            <Image style = {{width: 106, height: 13}} source = {group} alt = 'Group'/>
            <View style = {{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Text style = {{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: 12
              }}>69.900 đ</Text>
               <Text style = {{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: 12,
                color: 'rgba(150, 157, 170, 1)'
              }}>-39 %</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style = {{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: 50,
          backgroundColor: 'rgba(27, 169, 255, 1)'
        }}>
          <TouchableOpacity style = {{
            paddingLeft: 10
          }}><Image source = {Index2} alt = 'index2'/>
          </TouchableOpacity>
          <TouchableOpacity><Image source = {Home} alt = 'home'/></TouchableOpacity>
          <TouchableOpacity style = {{
            paddingRight: 10
          }}><Image source = {Arrow} alt = 'arrow2'/></TouchableOpacity>
        </View>
    </View>
  );
}
export default screen1;