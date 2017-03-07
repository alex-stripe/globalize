define([
	"src/util/globalize-date"
], function( GlobalizeDate ) {

var date = new Date(Date.UTC(2017, 1, 19, 2)), 
	date1 = new Date(Date.UTC(2017, 1, 19, 1));

QUnit.assert.magicDate = function( date, tzdata, expected ) {
	var globalizeDate = new GlobalizeDate( date, tzdata );
	this.equal( globalizeDate.getDate(), expected.Date );
	this.equal( globalizeDate.getMonth(), expected.Month );
	this.equal( globalizeDate.getFullYear(), expected.Year );
	this.equal( globalizeDate.getHours(), expected.Hours );
	this.equal( globalizeDate.getMinutes(), expected.Minutes );
	this.equal( globalizeDate.getSeconds(), expected.Seconds );
};

QUnit.test( "should test magic date with trasitions", function( assert ) {
	var TzData_Sao_Paulo = {
		"name": "America/Sao_Paulo",
		"untils": [
			-1767214412000,
			-1206957600000,
			-1191362400000,
			-1175374800000,
			-1159826400000,
			-633819600000,
			-622069200000,
			-602283600000,
			-591832800000,
			-570747600000,
			-560210400000,
			-539125200000,
			-531352800000,
			-195426000000,
			-184197600000,
			-155163600000,
			-150069600000,
			-128898000000,
			-121125600000,
			-99954000000,
			-89589600000,
			-68418000000,
			-57967200000,
			499748400000,
			511236000000,
			530593200000,
			540266400000,
			562129200000,
			571197600000,
			592974000000,
			602042400000,
			624423600000,
			634701600000,
			656478000000,
			666756000000,
			687927600000,
			697600800000,
			719982000000,
			728445600000,
			750826800000,
			761709600000,
			782276400000,
			793159200000,
			813726000000,
			824004000000,
			844570800000,
			856058400000,
			876106800000,
			888717600000,
			908074800000,
			919562400000,
			938919600000,
			951616800000,
			970974000000,
			982461600000,
			1003028400000,
			1013911200000,
			1036292400000,
			1045360800000,
			1066532400000,
			1076810400000,
			1099364400000,
			1108864800000,
			1129431600000,
			1140314400000,
			1162695600000,
			1172368800000,
			1192330800000,
			1203213600000,
			1224385200000,
			1234663200000,
			1255834800000,
			1266717600000,
			1287284400000,
			1298167200000,
			1318734000000,
			1330221600000,
			1350788400000,
			1361066400000,
			1382238000000,
			1392516000000,
			1413687600000,
			1424570400000,
			1445137200000,
			1456020000000,
			1476586800000,
			1487469600000,
			1508036400000,
			1518919200000,
			1540090800000,
			1550368800000,
			1571540400000,
			1581818400000,
			1602990000000,
			1613872800000,
			1634439600000,
			1645322400000,
			1665889200000,
			1677376800000,
			1697338800000,
			1708221600000,
			1729393200000,
			1739671200000,
			1760842800000,
			1771725600000,
			1792292400000,
			1803175200000,
			1823742000000,
			1834624800000,
			1855191600000,
			1866074400000,
			1887246000000,
			1897524000000,
			1918695600000,
			1928973600000,
			1950145200000,
			1960423200000,
			1981594800000,
			1992477600000,
			2013044400000,
			2024532000000,
			2044494000000,
			2055376800000,
			2076548400000,
			2086826400000,
			2107998000000,
			2118880800000,
			2139447600000,
			null
		],
		"offsets": [
			186.4667,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120,
			180,
			120
		],
		"population": 20365000
	};
	var expectedDate = {
		Date: 18,
		Month: 1,
		Year: 2017,
		Hours: 23,
		Minutes: 0,
		Seconds:0
	};
	assert.magicDate( date, TzData_Sao_Paulo, expectedDate );
	expectedDate = {
		Date: 18,
		Month: 1,
		Year: 2017,
		Hours: 23,
		Minutes: 0,
		Seconds:0
	};
	assert.magicDate( date1, TzData_Sao_Paulo, expectedDate );
});

});
