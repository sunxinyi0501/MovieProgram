function setlocalStorage(keys, value){
			if (localStorage) {
				var jsom = localStorage['jsom'];
				var mp = {};
				if (jsom && jsom != '') {
					mp = JSON.parse(jsom);
				}
				mp[keys] = value;
				jsom = JSON.stringify(mp);
				localStorage['jsom'] = jsom;
			} else {
				/**/
			}

		}
function removelocalStorage(keys){
		if (localStorage && localStorage['jsom'] != undefined) {
			var jsom = localStorage['jsom'];
			if (jsom && jsom != '') {
				var a = {};
				var mp = JSON.parse(jsom);
				for (var i in mp) {
					if (i != keys) {
						a[i] = mp[i];
					}
				}
				//mp[keys] = '';
				jsom = JSON.stringify(a);
				localStorage['jsom'] = jsom;
			}
		}
	}

function getlocalStorage(keys){
		if (localStorage && localStorage['jsom'] != undefined) {
				var jsom = localStorage['jsom'];
				if (jsom && jsom != '') {
					var mp = JSON.parse(jsom);
					if (mp[keys] && mp[keys] != '') {
						return mp[keys];
					} else {
						return "";
					}
				}
			} else {
				return "";
			}
	}
 function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;

    if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
        // rfc4122, version 4 form
        var r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random()*16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }

    return uuid.join('');

}
 /**Check if a string is contained
  *  in another string with the same first character
 * */
  function checkStrContain(i, j) {
	if(!i || !j){
		return false;
	}
	if(i.charAt(0) != j.charAt(0)){
		return false;
	}
	i = i.substr(1,i.length-1);
	j = j.substr(1,j.length-1);
	var a;
	var b;
	if (i.length > j.length) {
		a = i;
		b = j;
	} else {
		a = j;
		b = i;
	}
	var count = 0;
	for (var bi = 0; bi < b.length; bi++) {
		var bArr = b.split("");
		if (a.indexOf(bArr[bi]) != -1) {
			count++;
		} else {
			break;
		}
	}
	if (b.length == count) {
		return true;
	} else {
		return false;
	}
}

/**
	     * Fuzzy search based on
		 *  string to return data matching the conditions
	     *
	     */
 function getArrayByName(name,array,length){
	if(array.length < 1){
		return;
	}
	var result = [];
	for (var key in array) {
		if (checkStrContain(array[key].name,name) && result.length<length) {
			result.push(array[key])
		}
	}
	return result
}