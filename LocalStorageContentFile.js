/*
 * Local Storage Manager
 * Copyright (C) 2011 Frank Bille
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>. 
 */
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if (request.action == "getLocalStorage") {
		var responseObject = {
			localStorage : []
		};
		for(var i = 0; i < localStorage.length; i++) {
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			responseObject.localStorage.push({
				key : key,
				value : value
			});
		}
		sendResponse(responseObject);
	} else if (request.action == "clearLocalStorage") {
		localStorage.clear();
		sendResponse({});
	}
});
