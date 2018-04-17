'use strict';

(function (root) {

	//Jueves 1 de Enero de 1970
	var secondsPerDay = 60 * 60 * 24;
	var secondsPerYear = 365 * secondsPerDay;
	var secondsPerLeapYear = 366 * secondsPerDay;
	var secondsPerWeek = secondsPerDay * 7;

	function isNum(v) {
		return typeof v === 'number';
	}

	function isNotANumber(obj) {
		if (!isNum(obj.hour) || !isNum(obj.min) || !isNum(obj.sec)) {
			return true;
		}
		return false;
	};

	function secondsOfMonthsInTheSameYear(month, year) {
		var result = 0;
		for (var i = 1; i < month; i++) {
			result += DateUtils.getMonthDays(i, year);
		}
		result *= secondsPerDay;
		return result;
	}

	function secondsInTheSameMonth(day, hour, min, sec) {
		var myDays = (day - 1) * secondsPerDay;
		var myHours = hour * 60 * 60;
		var myMins = min * 60;
		return myDays + myHours + myMins + sec;
	}

	function mkMilitar(hour, min, sec) {
		return asMilitar(hour) + ':' + asMilitar(min) + ':' + asMilitar(sec);
	}

	function ownMathFloor(num) {
		var result = void 0;

		if (num >= 0) {
			result = Math.floor(num);
		} else {
			result = Math.floor(num);
			++result;
		}

		return result;
	}

	// Before including this library you must include date.js
	function MyDateTime(day, month, year) {
		var hour = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
		var min = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
		var sec = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;


		this.hour = hour;
		this.min = min;
		this.sec = sec;
		this.date = new MyDate(day, month, year);

		this.toString = function () {
			if (!this.isValid()) {
				return 'Fecha inválida';
			}
			return this.date.toString() + ' ' + mkMilitar(this.hour, this.min, this.sec);
		};

		this.getDay = function () {
			return this.date.day;
		};

		this.getMonth = function () {
			return this.date.month;
		};

		this.getYear = function () {
			return this.date.year;
		};

		this.getSeconds = function () {
			return this.sec;
		};

		this.getMinutes = function () {
			return this.min;
		};

		this.getHour = function () {
			return this.hour;
		};

		this.inLeapYear = function () {
			return this.date.inLeapYear();
		};

		this.setLocale = function (locale) {
			this.date.setLocale(locale);
		};

		this.getLocale = function () {
			return this.date.getLocale();
		};

		this.isValid = function () {

			if (!this.date.isValid()) {
				return false;
			}

			//Type of data validation
			if (isNotANumber(this)) {
				return false;
			}

			if (this.hour < 0 && this.hour > 23 || isNaN(this.hour)) {
				return false;
			}

			if (this.min < 0 && this.min > 59 || isNaN(this.min)) {
				return false;
			}

			if (this.sec < 0 && this.sec > 59 || isNaN(this.sec)) {
				return false;
			}

			return true;
		};

		this.getEpoch = function () {
			var secondsYears = DateUtils.secondsUpToTheYear(this.getYear());
			var secondsMonth = secondsOfMonthsInTheSameYear(this.getMonth(), this.getYear());
			var restOfSeconds = secondsInTheSameMonth(this.date.day, this.hour, this.min, this.sec);
			return secondsYears + secondsMonth + restOfSeconds;
		};

		/*
  Unit Posibilities: second/s, minute/s, hour/s and day/s.
  */

		this.diff = function (unit, obj) {
			var diff = this.getEpoch() - obj.getEpoch();
			switch (unit) {
				case 'second':
				case 'seconds':
					return diff;
					break;
				case 'minute':
				case 'minutes':
					return diff / 60;
					break;
				case 'hour':
				case 'hours':
					return diff / 3600;
					break;
				case 'day':
				case 'days':
					return diff / secondsPerDay;
					break;
				case 'week':
				case 'weeks':
					return diff / secondsPerWeek;
					break;
				default:
					return 'Invalid input';
			}
		};
	};

	if (typeof module !== 'undefined' && module.exports) {
		exports = module.exports = MyDateTime;
	} else {
		root.MyDateTime = MyDateTime;
	}
})(undefined);