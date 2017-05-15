'use strict';

module.exports = {
    /*
    * Function that uses a slightly tailored form of binary search to efficiently compute the daylight and standard transitions for a timezone.
    * @params {Number} year - Year for which the DST transitions are to be computed
    * @returns {Object} - Object with the corresponding date-time values for the fall and spring DST transition period
    */
    get_transitions : function(year) {
        var p = 1000;

        //Get the timezone offset for a particular moment of time
        var tz_offset = function(n){
            return new Date(n*p).getTimezoneOffset();
        };

        //Check if there is timezone difference between two date-time values.
        var tzo_diff = function (a, b){
            return tz_offset(a) !== tz_offset(b);
        } ;
        
        var jan = new Date(year,0,1,0)/p;//Jan 1st of corresponding year 
        var	jun = new Date(year,5,30,12)/p;//June 30th of correspnding year
        
        //If there is no timezone difference then return null
        if (!tzo_diff(jan, jun)){
            return null;
        }
        
        var search = function (a,b) {
            var mid;
            //Find the exact middle date between two dates and check whether its UTC offset differs from A's offset or B's offset. Repeat this step using the new time span where the difference is found, until it is small enough.
            while(b-a>1){
                mid = a + (b-a>>1);
                tzo_diff(mid,b)? a = mid : b = mid;
            }
            return {
                from: a*p,
                to: b*p
            };
        };
    
        var dstTransitions = { 
            one: search(jan,jun), //Find transition for the first half of the year
            two: search(jun,new Date(year,11,31,12)/p)//Find transition for the second half of the year
        };

        /*
        * To determine whether the transitions belong to fall or spring DST we make use of the timezone offset. If the offset decreases while the
        * transition happens then it means we moved from standard to daylight time and hence is fall DST whereas the viceversa happens in spring
        * DST. Both hemispheres observe this same trend but the corresponding months vary. North observes fall DST during Oct or Nov whereas at the
        * same period of time southern hemisphere would be observing spring DST.
        */
        if(new Date(dstTransitions.one.from).getTimezoneOffset() > new Date(dstTransitions.one.to).getTimezoneOffset()){
            //For northern hemisphere
            return {
                "fall": dstTransitions.two,
                "spring": dstTransitions.one
            };
        }else if(new Date(dstTransitions.two.from).getTimezoneOffset() > new Date(dstTransitions.two.to).getTimezoneOffset()){
            //For southern hemisphere
            return {
                "fall": dstTransitions.one,
                "spring": dstTransitions.two
            };
        }	
    }
};