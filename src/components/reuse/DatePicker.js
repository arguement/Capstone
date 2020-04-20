import React from 'react';
import { StyleSheet } from 'react-native';
import { Datepicker, Layout, Text } from '@ui-kitten/components';

export default function DatePicker(props)  {

//   const [date, setDate] = React.useState(new Date());

  return (
    <Layout style={styles.container} level='1'>

      

      <Datepicker
        date={props.date}
        onSelect={/* nextDate => setDate(nextDate) */ props.onSelect}
        {...props}
      />

    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    // minHeight: 376,
    
  },
});