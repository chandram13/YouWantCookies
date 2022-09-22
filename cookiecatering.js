// Marvish Chandra


class Insomniac{
    function insomVariety(){
        regularFlavors = ["Chocolate Chunk","Double Chocolate Chunk","Classic with M&M's","Oatmeal Raisin","Midnight Berry","Double Chocolate Mint","Peanut Butter Chip","Snickerdoodle","Caramel Apple Pie","Sugar","White Chocolate Macadamia"]
        veganFlavors = ["Vegan Chocolate Chunk","Vegan Double Chocolate Chunk"]
        glutenfreeFlavors = ["Vegan Gluten-Free Chocolate Chip"]
        deluxeFlavors = ["Confetti Deluxe","Chocolate Peanut Butter Cup","Salted Caramel","Oatmeal Chocolate Walnut","S'mores","Triple Chocolate","Chocolate Chip Brownie","Deluxe Filled ft. Sour Patch Kids Bitz"]
        miniFlavors = ["Mini Chocolate Chunk"]
        sixPack = ""
        vegan_six_pack = ""
        glutenfree_six_pack = ""
        twelvePack = ""
        superSix = ""
        uniqueEight = ""
        deluxe_four_pack = ""
        fiftyPack = ""
        hundredPack = ""
        mini_twelve_pack = ""
        mini_twentyfour_pack = ""

        while (i = 0){
            sixPack.length > i.length; 
            i++;
            regularFlavors[i] += sixPack;
            break;
        }

        while (i = 0){
            vegan_six_pack.length > i.length;
            i++;
            veganFlavors[i] += vegan_six_pack;
            break;
        }

        while (i = 0){
            glutenfree_six_pack.length > i.length;
            i++;
            glutenfreeFlavors[i] += glutenfree_six_pack;
            break;
        }

        while (i = 0){
            twelvePack.length > i.length;
            i++;
            regularFlavors[i] += twelvePack;
            break;
        }

        while (i = 0){
            superSix.length > i.length;
            i++;
            regularFlavors[i] += superSix;
            deluxeFlavors[i] += superSix; // add only one deluxe
            break;
        }

        while (i = 0){
            uniqueEight.length > i.length;
            i++;
            regularFlavors[i] += superSix; // add only four classics
            deluxeFlavors[i] += superSix; // add only four deluxe
            break;
        }

        while (i = 0){
            deluxe_four_pack.length > i.length;
            i++;
            deluxeFlavors[i] += deluxe_four_pack;
            break;
        }

        while (i = 0){
            fiftyPack.length > i.length;
            i++;
            regularFlavors[i] += fiftyPack;
            break;
        }

        while (i = 0){
            hundredPack.length > i.length;
            i++;
            regularFlavors[i] += hundredPack;
            break;
        }

        while (i = 0){
            mini_twelve_pack.length > i.length;
            i++;
            miniFlavors[i] += mini_twelve_pack;
            break;
        }

        while (i = 0){
            mini_twentyfour_pack.length > i.length;
            i++;
            miniFlavors[i] += mini_twentyfour_pack;
            break;
        }

    }
    function packPrices(){
        individualCookie = {Price: 2.75}
        sixPack = {Price: 14.00}
        vegan_six_pack = {Price: 14.00}
        glutenfree_six_pack = {Price: 14.00}
        twelvePack = {Price: 25.00}
        superSix = {Price: 15.50}
        uniqueEight = {Price: 24.00}
        deluxe_four_pack = {Price: 16.00}
        fiftyPack = {Price: 100.00}
        hundredPack = {Price: 185.00}
        mini_twelve_pack = {Price: 7.00}
        mini_twentyfour_pack = {Price: 12.50}

    }
    function iceCream(){
        iceCream_flavors = ["Birthday Cake","Chocolate","Cookie Dough","Mint Chocolate Chip","Strawberry","Vanilla Coffee"]
        scoop1 = ""
        scoop2 = ""
        scoop3 = ""
        completeCup = ""
        iceCreamCookie_classic = ""
        iceCreamCookie = ""
        iceCreamCookie_Deluxe = ""
        iceCreamCookie_Doubled = ""
        iceCreamCookie_Brownie = ""

        while (i = 0){
            completeCup.length > i.length;
            i++;
            iceCream_flavors[i] += scoop1;
            iceCream_flavors[i] += scoop2;
            completeCup = scoop1[i] + scoop2[i];
            break;
        }

        while (i = 0){
            iceCreamCookie.length > i.length;
            i++;
            iceCream_flavors[i] += scoop1;
            iceCream_flavors[i] += scoop2;
            regularFlavors[i] += iceCreamCookie_classic;
            iceCreamCookie = scoop1[i] + scoop2[i] + iceCreamCookie_classic[i];
            break;
        }

        while (i = 0){
            iceCreamCookie_Deluxe.length > i.length;
            i++;
            iceCream_flavors[i] += scoop1;
            iceCream_flavors[i] += scoop2;
            deluxeFlavors[i] += iceCreamCookie_Deluxe;
            iceCreamCookie_Doubled = scoop1[i] + scoop2[i] + iceCreamCookie_Deluxe[i];
            break;
        }

        while (i = 0){
            iceCreamCookie_Brownie.length > i.length;
            i++;
            iceCream_flavors[i] += scoop1;
            iceCream_flavors[i] += scoop2; 
            iceCreamCookie_Brownie = scoop1[i] + scoop2[i] + deluxeFlavors[6];
            break;
        }



    function  iceCreamPrices(){
        insom_iceCreamCup = {Price: 5.75}
        insom_iceCreamCookie = {Price: 7.00}
        insom_iceCreamCookie_Deluxe = {Price: 8.50}
        insom_iceCreamCookie_Brownie = {Price: 8.50}
        insomPint = {Price: 13.00}
        insom_CookieButter_Bomb = {Price: 8.75}
    }
    function wiches(){
        cookie1 = ""
        cookie2 = ""
        deluxeCookie1 = ""
        deluxeCookie2 = ""
        icingFlavors = ["Buttercream","Cream Cheese"]
        chosenIcing = ""
        cookieWich = ""
        bigWich = ""
        deluxe_bigWich = ""
        deluxe_cookieWich = ""

        while (i = 0){
            cookieWich.length > i.length;
            i++;
            iceCream_flavors[i] += scoop1;
            iceCream_flavors[i] += scoop2;
            regularFlavors[i] += cookie1;
            regularFlavors[i] += cookie2;
            cookieWich = scoop1 + scoop2 + cookie1 + cookie2;
        }

        while (i = 0){
            bigWich.length > i.length;
            i++;
            regularFlavors[i] += cookie1;
            regularFlavors[i] += cookie2;
            icingFlavors[i] += chosenIcing;
            bigWich = cookie1 + cookie2 + chosenIcing;
        }

        while (i = 0){
            deluve_bigWich.length > i.length;
            i++;
            deluxeFlavors[i] += deluxeCookie1;
            deluxeFlavors[i] += deluxeCookie2;
            icingFlavors[i] += chosenIcing;
            deluxe_bigWich = deluxeCookie1 + deluxeCookie2 + chosenIcing;
        }

        while (i = 0){
            deluxe_cookieWich.length > i.length;
            i++;
            deluxeFlavors[i] += deluxeCookie1;
            deluxeFlavors[i] += deluxeCookie2;
            iceCream_flavors[i] += scoop1;
            iceCream_flavors[i] += scoop2;
            iceCream_flavors[i] += scoop3;
            deluxe_cookieWich = deluxeCookie1 + deluxeCookie2 + scoop1 + scoop2 + scoop3;
        }
    }
    function wichesPrices(){
        insomcookieWich = {Price: 8.50}
        insombigWich = {Price: 8.00}
        insom_deluxe_bigWich = {Price: 11.00}
        insom_deluxe_cookieWich = {Price: 12.00}
    }
    function cakes(){
        cakeFlavors = ["Chocolate Chunk","Double Chocolate Chunk","Double Chocolate Mint","Classic with M&M's","Oatmeal Raisin","Peanut Butter Chip","Snickerdoodle","Sugar","White Chocolate Macadamia","Caramel Apple Pie"]
        deluxe_cakeFlavors = ["Chocolate Peanut Butter Cup","Confetti Deluxe","Oatmeal Chocolate Walnut","S'mores","Salted Caramel","Triple Chocolate"]
        chosen_cake_flavor = ""
        footballCookie = ""
        cakeImages = ["Only Icing, No Image","Congrats","I Was Told To Bring Dessert","Sorry Your Day Sucked","I Just Love Ya"]
        deluxe_cakeImages = ["Only Icing, No Image","Congrats","I Was Told To Bring Dessert","Sorry Your Day Sucked"]
        heart_cakeImages = ["Only Icing, No Image","Congrats"]
        moon_cakeFlavors = ["Chocolate Chunk Crescent Moon","Classic with M&M's Crescent Moon","Double Chocolate Chunk Crescent Moon","Double Chocolate Mint Crescent Moon","Oatmeal Raisin Crescent Moon","Peanut Butter Chip Crescent Moon","Snickerdoodle Crescent Moon","Sugar Crescent Moon","White Chocolate Macadamia Crescent Moon","Midnight Berry Crescent Moon"]
        graduationImages = ["Only Icing, No Image","Congrats"]
        chosenMoonFlavor = ""
        chosenImage = ""
        ten_inch_cake = ""
        ten_inch_deluxecake = ""
        six_inch_cake = ""
        six_inch_deluxecake = ""
        heart_cookie_cake = ""
        moon_cookie_cake = ""
        triple_threat_cake = ""
        tripleFlavor1 = ""
        tripleFlavor2 = ""
        tripleFlavor3 = ""
        graduation_cake = ""

        while (i = 0){
            footballCookie.length > i.length;
            i++;
            cakeFlavors[i] += chosen_cake_flavor;
            icingFlavors[i] += chosenIcing;
            footballCookie = chosen_cake_flavor + chosenIcing;
            break;
        }

        while (i = 0){
            ten_inch_cake.length > i.length;
            i++;
            cakeFlavors[i] += chosen_cake_flavor;
            cakeImages[i] += chosenImage;
            icingFlavors[i] += chosenIcing;
            ten_inch_cake = chosen_cake_flavor + chosenImage + chosenIcing;
        }

        while (i = 0){
            ten_inch_deluxecake.length > i.length;
            i++;
            deluxe_cakeFlavors[i] += chosen_cake_flavor;
            deluxe_cakeImages[i] += chosenImage;
            icingFlavors[i] += chosenIcing;
            ten_inch_deluxecake = chosen_cake_flavor + chosenImage + chosenIcing;
        }

        while (i = 0){
            six_inch_cake.length > i.length;
            i++;
            cakeFlavors[i] += chosen_cake_flavor;
            deluxe_cakeImages[i] += chosenImage;
            icingFlavors[i] += chosenIcing;
            six_inch_cake = chosen_cake_flavor + chosenImage + chosenIcing;
        }

        while (i = 0){
            six_inch_deluxecake.length > i.length;
            i++;
            deluxe_cakeFlavors[i] += chosen_cake_flavor;
            deluxe_cakeImages[i] += chosenImage;
            icingFlavors[i] += chosenIcing;
            six_inch_deluxecake = chosen_cake_flavor + chosenImage + chosenIcing;
        }

        while (i = 0){
            heart_cookie_cake.length > i.length;
            i++;
            cakeFlavors[i] += chosen_cake_flavor;
            icingFlavors[i] += chosenIcing;
            heart_cakeImages[i] += chosenImage;
            heart_cookie_cake = chosen_cake_flavor + chosenIcing + chosenImage;
        }
        
        while (i = 0){
            moon_cookie_cake.length > i.length;
            i++;
            moon_cakeFlavors[i] += chosenMoonFlavor;
            cakeFlavors[i] += chosen_cake_flavor;
            deluxe_cakeImages[i] += chosenImage;
            icingFlavors[i] += chosenIcing;
            moon_cookie_cake = chosenMoonFlavor + chosen_cake_flavor + chosenImage + chosenIcing;
        }

        while (i = 0){
            triple_threat_cake.length > i.length;
            i++;
            cakeFlavors[i] += tripleFlavor1;
            cakeFlavors[i] += tripleFlavor2;
            cakeFlavors[i] += tripleFlavor3;
            deluxe_cakeImages[i] += chosenImage;
            icingFlavors[i] += chosenIcing;
            triple_threat_cake = tripleFlavor1 + tripleFlavor2 + tripleFlavor3 + chosenImage + chosenIcing;
        }

        while (i = 0){
            graduation_cake.length > i.length;
            i++;
            cakeFlavors[i] += chosen_cake_flavor;
            graduationImages[i] += chosenImage;
            icingFlavors[i] += chosenIcing;
            graduation_cake = chosen_cake_flavor + chosenImage + chosenIcing;
        }
    }

    function cakePrices(){
        insom_footballCookie = {Price: 27.50}
        insom_ten_inch_cake = {Price: 27.50}
        insom_ten_inch_deluxecake = {Price: 31.50}
        insom_six_inch_cake = {Price: 15.75}
        insom_six_inch_deluxecake = {Price: 19.00}
        insom_heart_cookie_cake = {Price: 27.50}
        insom_moon_cookie_cake = {Price: 27.50}
        insom_triple_threat_cake = {Price: 27.50}
        insom_graduation_cake = {Price: 30.50}
        
    }
    }
class Crumbl{
    function crumblVariety(){
        mini = {Price: 0.98}
        regular = {Price: 2.15}
        flavors = ["Sugar","Milk Chocolate Chip","Confetti Cake","Buckeye Brownie","Cinnamon Swirl","Circus Animal","Chocolate Cake","Oreo","Churro","Cookies & Cream Milkshake","Reese's Cup","Dirt Cake","Funfetti","Muddy Buddy","Snickerdoodle Cupcake","Hot Chocolate","Pumpkin Chocolate Chip","Caramel Apple","Peppermint Bark","Eggnog","Gingersnap","Red Velvet Cream Cheese","Gender Reveal"]
        fourPack = ""
        sixPack = ""
        partyPack = ""
        
        while (i = 0){
            fourPack.length > i.length; 
            i++;
            flavors[i] += fourPack;
            break;
        }
        while (i = 0){
            sixPack.length > i.length;
            i++;
            flavors[i] += sixPack;
            break;
        }
        while (i = 0){ 
            partyPack.length > i.length; 
            i++;
            flavors[i] += partyPack;
            break;
        }
    function packPrices(){
        fourPack = {Price: 16.25}
        sixPack = {Price: 25.00}
        partyPack = {Price: 42.50}
    }
    }
}