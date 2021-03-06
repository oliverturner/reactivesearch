import Expo from 'expo';
import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import DateRange from './DateRangeView';

const navigationOptionsBuilder = (drawerLabel, iconName) => ({
	drawerLabel,
	drawerIcon: iconName ? ({ tintColor, focused }) => ( // eslint-disable-line react/prop-types
		<Ionicons
			name={focused ? `${iconName}` : `${iconName}-outline`}
			size={26}
			style={{ color: tintColor }}
		/>
	) : null,
});

const RootDrawer = DrawerNavigator({
	DrawerOption1: {
		navigationOptions: navigationOptionsBuilder('Basic', 'ios-home'),
		screen: ({ navigation }) => ( // eslint-disable-line
			<DateRange
				showFilter={false}
				navigation={navigation}
			/>
		),
	},
	// DrawerOption2: {
	// 	navigationOptions: navigationOptionsBuilder('With title'),
	// 	screen: ({ navigation }) => ( // eslint-disable-line
	// 		<DateRange
	// 			title="Choose a date range"
	// 			showFilter={false}
	// 			navigation={navigation}
	// 		/>
	// 	),
	// },
	DrawerOption3: {
		navigationOptions: navigationOptionsBuilder('With placeholder'),
		screen: ({ navigation }) => ( // eslint-disable-line
			<DateRange
				placeholder="Choose dates"
				showFilter={false}
				navigation={navigation}
			/>
		),
	},
	// DrawerOption4: {
	// 	navigationOptions: navigationOptionsBuilder('Without showClear'),
	// 	screen: ({ navigation }) => ( // eslint-disable-line
	// 		<DateRange
	// 			showClear={false}
	// 			showFilter={false}
	// 			navigation={navigation}
	// 		/>
	// 	),
	// },
	// DrawerOption5: {
	// 	navigationOptions: navigationOptionsBuilder('With filter'),
	// 	screen: ({ navigation }) => ( // eslint-disable-line
	//         <DateRange
	//             showFilter={true}
	//             navigation={navigation}
	//         />
	// 	),
	// },
	// DrawerOption7: {
	// 	navigationOptions: navigationOptionsBuilder('Show more than 1 month'),
	// 	screen: ({ navigation }) => ( // eslint-disable-line
	//         <DateRange
	//             numberOfMonths={2}
	//             showFilter={false}
	//             navigation={navigation}
	//         />
	// 	),
	// },
	DrawerOption8: {
		navigationOptions: navigationOptionsBuilder('With defaultSelected'),
		screen: ({ navigation }) => ( // eslint-disable-line
			<DateRange
				defaultSelected={{
					start: new Date('2017-04-07'),
					end: new Date('2017-04-14'),
				}}
				showFilter={false}
				navigation={navigation}
			/>
		),
	},
	DrawerOption9: {
		navigationOptions: navigationOptionsBuilder('With queryFormat'),
		screen: ({ navigation }) => ( // eslint-disable-line
			<DateRange
				showFilter={false}
				queryFormat="date_time_no_millis"
				navigation={navigation}
			/>
		),
	},
	DrawerOption10: {
		navigationOptions: navigationOptionsBuilder('Playground', 'ios-flask'),
		screen: ({ navigation }) => ( // eslint-disable-line
			<DateRange
				// title="Date Picker"
				placeholder="Pick dates"
				numberOfMonths={1}
				queryFormat="date_time_no_millis"
				defaultSelected={{
					start: new Date('2017-01-01'),
					end: new Date('2017-01-05'),
				}}
				showFilter={false}
				filterLabel="Date Range"
				navigation={navigation}
			/>
		),
	},

});

const Navigator = () => (
	<RootDrawer />
);

module.exports = Navigator;
Expo.registerRootComponent(Navigator);
