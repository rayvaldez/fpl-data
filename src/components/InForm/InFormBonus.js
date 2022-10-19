import React from 'react'
import Box from '@mui/material/Box'
import playerJSON from '../jsonData/playerJSON';
import Typography from '@mui/material/Typography';
import InFormGk from './InFormGk';
import InFormDef from './InFormDef';
import InFormMid from './InFormMid';
import InFormFwd from './InFormFwd';

const InForm = ({fixtures, nextGW}) => {
  
  let last5 = [];
  let bonusArray = [];
  let gkArray = [];
  let defArray = [];
  let midArray = [];
  let fwdArray = [];

  
  const filter5 = () => {
    fixtures?.forEach(fixture => {
      if (fixture.event <= nextGW && (fixture.event >= nextGW - 5)) {
      last5?.push(fixture)
      }
    })
  }

  filter5()
  
  const mapThroughBonus = (array) => {
    array?.forEach(element => {
      const found = bonusArray.find(object => object?.element === element.element)
      const foundIndex = bonusArray.findIndex(object => object?.element === element.element)

      if (!found) {
        bonusArray.push({
          element: element.element,
          value : [element.value]
        })
      } else if (found ) {
        bonusArray[foundIndex].value.push(element.value)
      }
    })
  }

  const bpsArray = () => {
    last5.forEach(fixture => {
      mapThroughBonus(fixture.stats[8]?.a)
      mapThroughBonus(fixture.stats[8]?.h)
    })
  }

  bpsArray()

  const totalScore = bonusArray.map(element => {
    const sum = element.value.reduce((total, value) => total + value)
    const el = {element: element.element, value: sum}
    return el
  })

  const sortByTotal = totalScore.sort((a, b) => a.value - b.value)
  sortByTotal.reverse()

  const playerArray = sortByTotal.map(el => {
    const found = playerJSON.find(player => player.id === el.element)
    return found
  })

  const filterByPosition = (array, position, size, filteredArray) => {
      const filter = array.filter(player => player?.element_type === position)
      filter.length = size
      filteredArray.push(filter)
  }

  filterByPosition(playerArray, 1, 1, gkArray)
  filterByPosition(playerArray, 2, 4, defArray)
  filterByPosition(playerArray, 3, 4, midArray)
  filterByPosition(playerArray, 4, 2, fwdArray)

  // Mode is the most common number in the array
  // Median is the middle number of the array


  return (
    <Box sx={{
      p: '0.2em 1em 0.6em',
      m: '2vh 1vw 2vh 1vw',
      // bgcolor: '#26262a',
      // borderRadius: '10px'
    }}>
      <Typography variant='subtitle2' sx={{ 
        color: '#33BB00',
        fontFamily: 'masque',
        textAlign: 'center'
      }}>
        Form
      </Typography>
      <Typography variant='caption' sx={{ 
        color: '#faf9f6',
        textAlign: 'center'
      }}>
        Players with the highest bonus over the last 5 gameweeks
      </Typography>
      <Box label='touchline' sx={{
        height: '70vh',
        borderWidth: '5px',
        borderColor: '#22800a',
        borderStyle: 'solid',
        borderRadius: '5px',
        // opacity: '30%',
        position: 'relative'
      }}>
        <Box label='h-penalty' sx={{
          borderWidth: '5px',
          borderColor: '#22800a',
          borderStyle: 'solid',
          width: '50vw',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '70px',
          borderTop: '0'
        }}>
          <InFormGk goalkeeper={gkArray[0]}/>
        </Box>
        <Box label='defenderArea' sx={{ textAlign: 'center' }}>
          {defArray[0].map(defender => (
            <InFormDef defender={defender} key={defender.id}/>
          ))}
        </Box>
        <Box label='centreCircle' sx={{
          borderWidth: '5px',
          borderRadius: '50%',
          borderStyle: 'solid',
          borderColor: '#22800a',
          height: '100px',
          width: '100px',
          left: '35%',
          top: '39%',
          position: 'absolute'
        }}></Box>
        <Box label='centerline' sx={{
          borderBottom: '5px solid #22800a',
          height: '24%',
          position: 'relative'
        }}>
          <Box label='midfielderArea' sx={{ textAlign: 'center', pt: '6em' }}>
            {midArray[0].map(midfielder => (
              <InFormMid midfielder={midfielder} key={midfielder.id}/>
            ))}
          </Box>
        </Box>
        <Box label='forwardArea' sx={{ textAlign: 'center', pt: '8em' }}>
            {fwdArray[0].map(forward => (
              <InFormFwd forward={forward} key={forward.id}/>
            ))}
          </Box>        
        <Box label='a-penalty' sx={{
          position: 'absolute',
          borderWidth: '5px',
          borderColor: '#22800a',
          borderStyle: 'solid',
          width: '50vw',
          left: '20%',
          height: '70px',
          borderBottom: '0',
          bottom: '0px'
        }}></Box>
      </Box>
    </Box>
  )
}

export default InForm;