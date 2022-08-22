import React from 'react';
import { gameData } from '../gameData';
import { Team } from './Team';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination"

import { FreeMode, Pagination } from 'swiper';

 
const LandingTeamInformation = () => {

  return (
    <Box sx={{ mt: '1.2em'}}>
      <Typography sx={{ color: '#faf9f6', ml: '4vw', mt: '-2vh', mb: '0.4vh'}}>
        Team Stats
      </Typography>
      <Box>
        <Swiper
          slidesPerView={1}
          spaceBetween={-80}
          grabCursor={true}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          >
          {gameData[0].teams.map(teamId =>
          <SwiperSlide key={teamId.name}>
            <Team key={teamId.id} team={teamId} />
          </SwiperSlide>
          )}
        </Swiper>        
      </Box>
    </Box>
  )
}

export default LandingTeamInformation;