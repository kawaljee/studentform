
import * as Action from '../store/action/studentAction'


const KEYS = {
    students: 'students',
    studentId: 'studentId'
}

export const getCountryCollection = () => ([{"id":"1","title":"Afghanistan"},{"id":"2","title":"Albania"},{"id":"3","title":"Algeria"},{"id":"4","title":"Andorra"},{"id":"5","title":"Angola"},{"id":"6","title":"Anguilla"},{"id":"7","title":"Antigua & Barbuda"},{"id":"8","title":"Argentina"},{"id":"9","title":"Armenia"},{"id":"10","title":"Aruba"},{"id":"11","title":"Australia"},{"id":"12","title":"Austria"},{"id":"13","title":"Azerbaijan"},{"id":"14","title":"Bahamas"},{"id":"15","title":"Bahrain"},{"id":"16","title":"Bangladesh"},{"id":"17","title":"Barbados"},{"id":"18","title":"Belarus"},{"id":"19","title":"Belgium"},{"id":"20","title":"Belize"},{"id":"21","title":"Benin"},{"id":"22","title":"Bermuda"},{"id":"23","title":"Bhutan"},{"id":"24","title":"Bolivia"},{"id":"25","title":"Bosnia & Herzegovina"},{"id":"26","title":"Botswana"},{"id":"27","title":"Brazil"},{"id":"28","title":"British Virgin Islands"},{"id":"29","title":"Brunei"},{"id":"30","title":"Bulgaria"},{"id":"31","title":"Burkina Faso"},{"id":"32","title":"Burundi"},{"id":"33","title":"Cambodia"},{"id":"34","title":"Cameroon"},{"id":"35","title":"Canada"},{"id":"36","title":"Cape Verde"},{"id":"37","title":"Cayman Islands"},{"id":"38","title":"Central Arfrican Republic"},{"id":"39","title":"Chad"},{"id":"40","title":"Chile"},{"id":"41","title":"China"},{"id":"42","title":"Colombia"},{"id":"43","title":"Congo"},{"id":"44","title":"Cook Islands"},{"id":"45","title":"Costa Rica"},{"id":"46","title":"Cote D Ivoire"},{"id":"47","title":"Croatia"},{"id":"48","title":"Cuba"},{"id":"49","title":"Curacao"},{"id":"50","title":"Cyprus"},{"id":"51","title":"Czech Republic"},{"id":"52","title":"Denmark"},{"id":"53","title":"Djibouti"},{"id":"54","title":"Dominica"},{"id":"55","title":"Dominican Republic"},{"id":"56","title":"Ecuador"},{"id":"57","title":"Egypt"},{"id":"58","title":"El Salvador"},{"id":"59","title":"Equatorial Guinea"},{"id":"60","title":"Eritrea"},{"id":"61","title":"Estonia"},{"id":"62","title":"Ethiopia"},{"id":"63","title":"Falkland Islands"},{"id":"64","title":"Faroe Islands"},{"id":"65","title":"Fiji"},{"id":"66","title":"Finland"},{"id":"67","title":"France"},{"id":"68","title":"French Polynesia"},{"id":"69","title":"French West Indies"},{"id":"70","title":"Gabon"},{"id":"71","title":"Gambia"},{"id":"72","title":"Georgia"},{"id":"73","title":"Germany"},{"id":"74","title":"Ghana"},{"id":"75","title":"Gibraltar"},{"id":"76","title":"Greece"},{"id":"77","title":"Greenland"},{"id":"78","title":"Grenada"},{"id":"79","title":"Guam"},{"id":"80","title":"Guatemala"},{"id":"81","title":"Guernsey"},{"id":"82","title":"Guinea"},{"id":"83","title":"Guinea Bissau"},{"id":"84","title":"Guyana"},{"id":"85","title":"Haiti"},{"id":"86","title":"Honduras"},{"id":"87","title":"Hong Kong"},{"id":"88","title":"Hungary"},{"id":"89","title":"Iceland"},{"id":"90","title":"India"},{"id":"91","title":"Indonesia"},{"id":"92","title":"Iran"},{"id":"93","title":"Iraq"},{"id":"94","title":"Ireland"},{"id":"95","title":"Isle of Man"},{"id":"96","title":"Israel"},{"id":"97","title":"Italy"},{"id":"98","title":"Jamaica"},{"id":"99","title":"Japan"},{"id":"100","title":"Jersey"},{"id":"101","title":"Jordan"},{"id":"102","title":"Kazakhstan"},{"id":"103","title":"Kenya"},{"id":"104","title":"Kiribati"},{"id":"105","title":"Kosovo"},{"id":"106","title":"Kuwait"},{"id":"107","title":"Kyrgyzstan"},{"id":"108","title":"Laos"},{"id":"109","title":"Latvia"},{"id":"110","title":"Lebanon"},{"id":"111","title":"Lesotho"},{"id":"112","title":"Liberia"},{"id":"113","title":"Libya"},{"id":"114","title":"Liechtenstein"},{"id":"115","title":"Lithuania"},{"id":"116","title":"Luxembourg"},{"id":"117","title":"Macau"},{"id":"118","title":"Macedonia"},{"id":"119","title":"Madagascar"},{"id":"120","title":"Malawi"},{"id":"121","title":"Malaysia"},{"id":"122","title":"Maldives"},{"id":"123","title":"Mali"},{"id":"124","title":"Malta"},{"id":"125","title":"Marshall Islands"},{"id":"126","title":"Mauritania"},{"id":"127","title":"Mauritius"},{"id":"128","title":"Mexico"},{"id":"129","title":"Micronesia"},{"id":"130","title":"Moldova"},{"id":"131","title":"Monaco"},{"id":"132","title":"Mongolia"},{"id":"133","title":"Montenegro"},{"id":"134","title":"Montserrat"},{"id":"135","title":"Morocco"},{"id":"136","title":"Mozambique"},{"id":"137","title":"Myanmar"},{"id":"138","title":"Namibia"},{"id":"139","title":"Nauro"},{"id":"140","title":"Nepal"},{"id":"141","title":"Netherlands"},{"id":"142","title":"Netherlands Antilles"},{"id":"143","title":"New Caledonia"},{"id":"144","title":"New Zealand"},{"id":"145","title":"Nicaragua"},{"id":"146","title":"Niger"},{"id":"147","title":"Nigeria"},{"id":"148","title":"North Korea"},{"id":"149","title":"Norway"},{"id":"150","title":"Oman"},{"id":"151","title":"Pakistan"},{"id":"152","title":"Palau"},{"id":"153","title":"Palestine"},{"id":"154","title":"Panama"},{"id":"155","title":"Papua New Guinea"},{"id":"156","title":"Paraguay"},{"id":"157","title":"Peru"},{"id":"158","title":"Philippines"},{"id":"159","title":"Poland"},{"id":"160","title":"Portugal"},{"id":"161","title":"Puerto Rico"},{"id":"162","title":"Qatar"},{"id":"163","title":"Reunion"},{"id":"164","title":"Romania"},{"id":"165","title":"Russia"},{"id":"166","title":"Rwanda"},{"id":"167","title":"Saint Pierre & Miquelon"},{"id":"168","title":"Samoa"},{"id":"169","title":"San Marino"},{"id":"170","title":"Sao Tome and Principe"},{"id":"171","title":"Saudi Arabia"},{"id":"172","title":"Senegal"},{"id":"173","title":"Serbia"},{"id":"174","title":"Seychelles"},{"id":"175","title":"Sierra Leone"},{"id":"176","title":"Singapore"},{"id":"177","title":"Slovakia"},{"id":"178","title":"Slovenia"},{"id":"179","title":"Solomon Islands"},{"id":"180","title":"Somalia"},{"id":"181","title":"South Africa"},{"id":"182","title":"South Korea"},{"id":"183","title":"South Sudan"},{"id":"184","title":"Spain"},{"id":"185","title":"Sri Lanka"},{"id":"186","title":"St Kitts & Nevis"},{"id":"187","title":"St Lucia"},{"id":"188","title":"St Vincent"},{"id":"189","title":"Sudan"},{"id":"190","title":"Suriname"},{"id":"191","title":"Swaziland"},{"id":"192","title":"Sweden"},{"id":"193","title":"Switzerland"},{"id":"194","title":"Syria"},{"id":"195","title":"Taiwan"},{"id":"196","title":"Tajikistan"},{"id":"197","title":"Tanzania"},{"id":"198","title":"Thailand"},{"id":"199","title":"Timor L'Este"},{"id":"200","title":"Togo"},{"id":"201","title":"Tonga"},{"id":"202","title":"Trinidad & Tobago"},{"id":"203","title":"Tunisia"},{"id":"204","title":"Turkey"},{"id":"205","title":"Turkmenistan"},{"id":"206","title":"Turks & Caicos"},{"id":"207","title":"Tuvalu"},{"id":"208","title":"Uganda"},{"id":"209","title":"Ukraine"},{"id":"210","title":"United Arab Emirates"},{"id":"211","title":"United Kingdom"},{"id":"212","title":"United States of America"},{"id":"213","title":"Uruguay"},{"id":"214","title":"Uzbekistan"},{"id":"215","title":"Vanuatu"},{"id":"216","title":"Vatican City"},{"id":"217","title":"Venezuela"},{"id":"218","title":"Vietnam"},{"id":"219","title":"Virgin Islands (US)"},{"id":"220","title":"Yemen"},{"id":"221","title":"Zambia"},{"id":"222","title":"Zimbabwe"}])
    
    
    
    
    
    
    
    
//     [
//     { id: '1', title: 'India' },
//     { id: '2', title: 'USA' },
//     { id: '3', title: 'Nepal' },
//     { id: '4', title: 'Bhutan' },
// ])



export function updateStudent(data) {
   
    Action.updateStudent(data);
 
}

export function generateStudentId() {
    if (localStorage.getItem(KEYS.studentId) == null)
        localStorage.setItem(KEYS.studentId, '0')
    var id = parseInt(localStorage.getItem(KEYS.studentId))
    localStorage.setItem(KEYS.studentId, (++id).toString())
    return id;
}




