import compareAsc from 'date-fns/compare_asc';
import isSameDay from 'date-fns/is_same_day';
import React from 'react';
import { DateFns, RangeDatePickerProps } from '../types';
import BaseDatePicker from './base';
import { composeEventHandlers, isInRange } from './utils';

type RangeDatePickerState = {
  hoveredDate: DateFns | null;
};

class RangeDatePicker extends React.Component<
  RangeDatePickerProps,
  RangeDatePickerState
> {
  static defaultProps = {
    selected: [],
  };

  state = { hoveredDate: null };

  setHoveredDate = date => {
    this.setState(state =>
      state.hoveredDate === date ? null : { hoveredDate: date }
    );
  };

  // Calendar level
  onMouseLeave = () => {
    this.setHoveredDate(null);
  };

  // Date level
  onHoverFocusDate(date) {
    if (this.props.selected.length !== 1) {
      return;
    }
    this.setHoveredDate(date);
  }

  /* eslint-disable-next-line */
  _handleOnDateSelected = ({ selected, selectable, date }) => {
    const { selected: selectedDates, onDateSelected, onChange } = this.props;
    if (onDateSelected) {
      onDateSelected({ selected, selectable, date });
    }

    if (!selectable) {
      return;
    }

    const dateTime = date.getTime();
    let newDates = [...selectedDates];
    if (selectedDates.length) {
      if (selectedDates.length === 1) {
        const firstTime = selectedDates[0].getTime();
        if (firstTime < dateTime) {
          newDates.push(date);
        } else {
          newDates.unshift(date);
        }
      } else if (newDates.length === 2) {
        newDates = [date];
      }
    } else {
      newDates.push(date);
    }

    if (onChange) {
      onChange(newDates);
    }

    if (newDates.length === 2) {
      this.setHoveredDate(null);
    }
  };

  getEnhancedDateProps = (
    getDateProps,
    dateBounds,
    { onMouseEnter, onFocus, ...restProps }
  ) => {
    const { hoveredDate } = this.state;
    const { date } = restProps.dateObj;
    return getDateProps({
      ...restProps,
      inRange: isInRange(dateBounds, date),
      start: dateBounds[0] && isSameDay(dateBounds[0], date),
      end: dateBounds[1] && isSameDay(dateBounds[1], date),
      // @ts-ignore
      hovered: hoveredDate && isSameDay(hoveredDate, date),
      onMouseEnter: composeEventHandlers(onMouseEnter, () => {
        this.onHoverFocusDate(date);
      }),
      onFocus: composeEventHandlers(onFocus, () => {
        this.onHoverFocusDate(date);
      }),
    });
  };

  getEnhancedRootProps = (getRootProps, props) =>
    getRootProps({
      ...props,
      onMouseLeave: this.onMouseLeave,
    });

  render() {
    const { children, ...rest } = this.props;
    const { hoveredDate } = this.state;
    const { selected } = this.props;

    const dateBounds =
      selected.length === 2 || !selected.length || !hoveredDate
        ? selected
        : // prettier-ignore
          // @ts-ignore
          [selected[0], hoveredDate].sort(compareAsc);

    return (
      <BaseDatePicker {...rest} onDateSelected={this._handleOnDateSelected}>
        {({ getRootProps, getDateProps, ...renderProps }) =>
          children({
            ...renderProps,
            getRootProps: this.getEnhancedRootProps.bind(this, getRootProps),
            getDateProps: this.getEnhancedDateProps.bind(
              this,
              getDateProps,
              dateBounds
            ),
          })
        }
      </BaseDatePicker>
    );
  }
}

export default RangeDatePicker;
