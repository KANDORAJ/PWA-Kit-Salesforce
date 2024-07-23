import React, { useState } from 'react';
import { Box, Radio, RadioGroup } from '@chakra-ui/react'

/**
 * Renders a group of radio buttons with a selected value.
 */

function RadioButtons(_props) {
    const [selectedValue, setSelectedValue] = useState('Change Me!');

    /**
     * Handles the change event of the radio group.
     */
    const handleRadioChange = (value) => {
        setSelectedValue(value);
    };

    return (
        <Box  alignItems="center"  mx="auto"  my={10}>
            <RadioGroup value={selectedValue} onChange={handleRadioChange}>
                <Box d="flex">
                    <Radio value="1">First</Radio>
                </Box>
                <Box d="flex">
                    <Radio value="2">Second</Radio>
                </Box>
                <Box d="flex">
                    <Radio value="3">Third</Radio>
                </Box>
            </RadioGroup>
            <p>Selected value: {selectedValue}</p>
        </Box>
    );
}

export default RadioButtons;
