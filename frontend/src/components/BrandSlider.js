import React, {useRef} from 'react';
import {Box} from '@mui/material';
import {styled} from '@mui/system';
import {Build, Business, Computer, Groups, Insights, Security, Verified, Work,} from '@mui/icons-material';

// Professional brand icons with names
const brands = [
    {icon: <Business/>, name: 'CorpSync'},
    {icon: <Computer/>, name: 'TechTrend'},
    {icon: <Verified/>, name: 'TrustPeak'},
    {icon: <Work/>, name: 'ProWorks'},
    {icon: <Build/>, name: 'InnovBuild'},
    {icon: <Security/>, name: 'SafeNet'},
    {icon: <Insights/>, name: 'DataCore'},
    {icon: <Groups/>, name: 'TeamFlow'},
];

// Styled components
const SliderContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    marginTop: '80px',
    marginBottom: '70px',
    overflow: 'hidden',
    width: '100vw', // Full viewport width
    backgroundColor: '#e9ecef',
    padding: '50px 0',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    [theme.breakpoints.down('sm')]: {
        padding: '16px 0',
    },
}));

const SliderTrack = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    animation: 'slide 25s linear infinite',
    '&:hover': {
        animationPlayState: 'paused',
    },
    '@keyframes slide': {
        '0%': {transform: 'translateX(0)'},
        '100%': {transform: 'translateX(-50%)'},
    },
});

const BrandIcon = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 32px',
    color: '#333333',
    transition: 'color 0.3s ease, transform 0.3s ease',
    minWidth: '120px', // Ensures consistent spacing
    '&:hover': {
        color: '#ff6200',
        transform: 'scale(1.1)',
    },
    '& svg': {
        fontSize: '90px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '36px',
        },
    },
    '& span': {
        marginTop: '8px',
        fontSize: '14px',
        fontWeight: '600',
        fontFamily: '"Inter", sans-serif',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            marginTop: '4px',
        },
    },
}));

const BrandSlider = () => {
    const sliderRef = useRef(null);

    // Duplicate brands for seamless looping
    const duplicatedBrands = [...brands, ...brands];

    return (
        <SliderContainer>
            <SliderTrack ref={sliderRef}>
                {duplicatedBrands.map((brand, index) => (
                    <BrandIcon key={index}>
                        {brand.icon}
                        <span>{brand.name}</span>
                    </BrandIcon>
                ))}
            </SliderTrack>
        </SliderContainer>
    );
};

export default BrandSlider;