import React from 'react';
import {Text} from 'react-native';
import RangeSlider from 'rn-range-slider';

export default class HourRangeSlider extends React.Component {
  render = () => {
    const { hours, fromHour, toHour } = this.props;
    const { onChangeHours } = this.props;
    const { style } = this.props;

    const min = 0;
    const max = hours.length-1;

    const initialLowValue = hours.indexOf(fromHour);
    const initialHighValue = hours.indexOf(toHour);

    return (
      <>
        <RangeSlider
          style={style} labelStyle={'none'}
          thumbRadius={15} lineWidth={2}
          gravity={'center'}
          min={min} max={max} step={1}
          initialLowValue={initialLowValue} initialHighValue={initialHighValue}
          selectionColor='#fff' blankColor='#62d8fb'
          onValueChanged = {(lowValue, highValue) => {
            const from = hours[lowValue];
            const to = hours[highValue];
            onChangeHours(from, to)
          }}
        />
      </>
    )
  }
}