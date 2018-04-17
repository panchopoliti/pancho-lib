'use strict';

(function (root) {

	var daysOfMonthsInTheYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	var secondsPerDay = 60 * 60 * 24;
	var secondsPerYear = 365 * secondsPerDay;
	var secondsPerLeapYear = 366 * secondsPerDay;

	function DateUtils() {
		this.isLeapYear = function (year) {
			return year % 100 != 0 && year % 4 == 0 || year % 400 == 0;
		};

		this.asMilitar = function (num) {
			return num < 10 ? '0' + num : num;
		};

		this.getMonthDays = function (month, year) {
			var result = void 0;
			switch (month) {
				case 1:
				case 3:
				case 5:
				case 7:
				case 8:
				case 10:
				case 12:
					result = 31;
					break;
				case 4:
				case 6:
				case 9:
				case 11:
					result = 30;
					break;
				case 2:
					result = this.isLeapYear(year) ? 29 : 28;
					break;
			}
			return result;
		};

		this.secondsUpToTheYear = function (year) {
			var secondsYears = 0;
			for (var y = 1970; y < year; y++) {
				secondsYears += this.isLeapYear(y) ? secondsPerLeapYear : secondsPerYear;
			}
			return secondsYears;
		};

		this.reverseGetEpoch = function (seconds) {
			var year = Math.floor(seconds / secondsPerYear) + 1970;
			var secondsInYear = seconds - this.secondsUpToTheYear(year);
			var extra24Hours = 1;
			var dayInYear = Math.floor(secondsInYear / secondsPerDay) + extra24Hours;
			var month = this.monthOfYearDay(dayInYear, year);
			var day = this.dayInMonth(dayInYear, month, year);

			return new MyDateTime(day, month, year);
		};

		this.monthOfYearDay = function (numDay, year) {
			var day = numDay;

			if (this.isLeapYear(year) && day > 59) {
				--day;
			}

			for (var i = 1; i < 13; i++) {

				if (day < daysOfMonthsInTheYear[i] + 1) {
					return i;
					break;
				}
			}
		};

		this.dayInMonth = function (numDay, month, year) {
			var result = 0;
			var extraDayPerLeapYear = 1;

			if (this.isLeapYear(year) && month > 1) {
				result = daysOfMonthsInTheYear[month] + extraDayPerLeapYear - this.getMonthDays(month, year);
			} else {
				result = daysOfMonthsInTheYear[month] - this.getMonthDays(month, year);
			}

			return numDay - result;
		};
	}

	if (typeof module !== 'undefined' && module.exports) {
		exports = module.exports = new DateUtils();
	} else {
		root.DateUtils = new DateUtils();
	}
})(undefined);