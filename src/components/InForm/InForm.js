import React, { useState } from 'react'
import Box from '@mui/material/Box'
import playerJSON from '../jsonData/playerJSON';
import Typography from '@mui/material/Typography';
import InFormGk from './InFormGk';
import InFormDef from './InFormDef';
import InFormMid from './InFormMid';
import InFormFwd from './InFormFwd';
import InFormInput from './InFormInput';
import InFormFilterGameweek from './InFormFilterGameweek';

const InForm = ({fixtures, nextGW}) => {

  const [input, setInput] = useState(0);
  const [noOfGameweeks, setNoOfGameweeks] = useState(5)
  
  let last5 = [];
  let bonusArray = [];
  let gkArray = [];
  let defArray = [];
  let midArray = [];
  let fwdArray = [];

  
  const filter5 = () => {
    fixtures?.forEach(fixture => {
      if (fixture.event <= nextGW && (fixture.event >= nextGW - noOfGameweeks)) {
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

  const onSelectionUpdate = (stat) => {
    setInput(stat);
  }

  const updateGwNo = (number) => {
    setNoOfGameweeks(number);
  }

  const bpsArray = () => {
    last5.forEach(fixture => {
      mapThroughBonus(fixture.stats[input]?.a)
      mapThroughBonus(fixture.stats[input]?.h)
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
      p: '0.2em 1em 0em',
      m: '2vh 1vw 2vh 1vw',
      position: 'relative'
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
        Use the dropdown box to filter between statistic over the last 2-5 gameweeks
      </Typography>
      <br></br>
      <Box sx={{ display: 'flex', justifyContent: 'space-around'}}>
        <InFormInput onSelectionUpdate={onSelectionUpdate}/>
        <InFormFilterGameweek updateGwNo={updateGwNo}/>
      </Box>
      <Box label="goalkeeper" sx={{ 
        position: 'absolute', 
        top: '22vh',
        left: '50%',
        transform: 'translate(-50%, 0)'
      }}>
        <InFormGk goalkeeper={gkArray[0]}/>
      </Box>
      <Box label="defenders" sx={{ 
        position: 'absolute',
        display: 'flex',
        width: '85%', 
        top: '33vh',
        left: '50%',
        transform: 'translate(-50%, 0)',
        justifyContent: 'space-around'
        // bgcolor: '#202020'
      }}>
        {defArray[0].map(defender => (
          <InFormDef defender={defender} key={defender.id}/>
        ))}
      </Box>
      <Box label="midfielders" sx={{ 
        position: 'absolute',
        display: 'flex',
        width: '96%',  
        top: '46vh',
        left: '50%',
        transform: 'translate(-50%, 0)',
        justifyContent: 'space-around',
        zIndex: '10'
      }}>
        {midArray[0].map(midfielder => (
          <InFormMid midfielder={midfielder} key={midfielder.id}/>
        ))}
      </Box>
      <Box label="forwards" sx={{ 
        position: 'absolute',
        display: 'flex', 
        top: '59vh',
        width: '60%',
        left: '50%',
        transform: 'translate(-50%, 0)',
        zIndex: '1',
        justifyContent: 'space-around'
      }}>
        {fwdArray[0].map(forward => (
          <InFormFwd forward={forward} key={forward.id}/>
        ))}
      </Box>
      <Box label='touchline' sx={{
        mt: '-4em',
        height: '70vh',
        borderWidth: '5px',
        borderColor: '#22800a',
        borderBottom: 'none',
        borderStyle: 'solid',
        borderRadius: '5px',
        position: 'relative',
        transform: 'perspective(70em) rotateX(40deg)',
        transformStyle: 'preserve-3d',
        overflow: 'hidden',
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
          {/* <InFormGk goalkeeper={gkArray[0]}/> */}
        </Box>
        {/* <Box label='defenderArea' sx={{ textAlign: 'center' }}>
          {defArray[0].map(defender => (
            <InFormDef defender={defender} key={defender.id}/>
          ))}
        </Box> */}
        {/* <Box label='midfielderArea' sx={{ textAlign: 'center', pt: '6em' }}>
          {midArray[0].map(midfielder => (
            <InFormMid midfielder={midfielder} key={midfielder.id}/>
          ))}
        </Box> */}
        <Box label='centreCircle' sx={{
          borderWidth: '5px',
          borderRadius: '50%',
          borderStyle: 'solid',
          borderColor: '#22800a',
          height: '90px',
          width: '90px',
          top: '45vh',
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
          zIndex: '-1'
        }}></Box>
        {/* <Box label='forwardArea' sx={{ 
          textAlign: 'center' 
        }}>
          {fwdArray[0].map(forward => (
            <InFormFwd forward={forward} key={forward.id}/>
          ))}
        </Box> */}
        <Box label='centerline' sx={{
          borderTop: '5px solid #22800a',
          position: 'relative',
          zIndex: '-1',
          top: '37vh'
        }}>
        </Box>
      </Box>
    </Box>
  )
}

export default InForm