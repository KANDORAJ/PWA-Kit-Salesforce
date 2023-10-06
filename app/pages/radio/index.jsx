import React, { useState } from 'react';
import { Box } from '@chakra-ui/react'

/**
 * Renders a group of radio buttons with a selected value state.
 */

function RadioButtons(_props) {
    const [selectedValue, setSelectedValue] = useState('Change Me!');

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Box  alignItems="center"  mx="auto"  my={10}>
            <Box d="flex"><label>
                First 
                <input 
                    py={5} 
                    px={2}
                    type="radio"
                    value="1"
                    checked={selectedValue === '1'}
                    onChange={handleRadioChange}
                />
                
            </label> </Box>
            <Box d="flex"><label>
                Second
                <input 
                    py={5} 
                    px={2}
                    type="radio"
                    value="2"
                    checked={selectedValue === '2'}
                    onChange={handleRadioChange}
                />
                
            </label></Box>
            <Box d="flex"><label>
                Third
                <input 
                    py={5} 
                    px={2}
                    type="radio"
                    value="3"
                    checked={selectedValue === '3'}
                    onChange={handleRadioChange}
                />
                
            </label></Box>
            <p>Selected value: {selectedValue}</p>
        </Box>
    );
}

export default RadioButtons;
