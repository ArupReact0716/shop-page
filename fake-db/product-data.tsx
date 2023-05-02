const productsJson = [
    // redmi mobile
    {
        "id": 101,
        "title": "REDMI 10 Power (Sporty Orange, 128 GB)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 50,
        "regularPrice": 52.2,
        "discount": 12.96,
        "rating": 4.2,
        "review": 101,
        "brand": "redmi",
        "category": "mobile",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/p/g/k/-original-imageyuud3bey9hh.jpeg",
    },
    {
        "id": 133,
        "title": "REDMI 10 Power (Power Black, 128 GB)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 175,
        "regularPrice": 182.2,
        "discount": 16.96,
        "rating": 3.2,
        "review": 133,
        "brand": "redmi",
        "category": "mobile",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/e/y/b/-original-imageftfzx8gfkys.jpeg",
    },
    {
        "id": 113,
        "title": "Redmi 9A Sport (Coral Green, 32 GB)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 275,
        "rating": 2.2,
        "review": 113,
        "brand": "redmi",
        "category": "mobile",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/x/i/8/-original-imag7chxqqu7h5hs.jpeg",
    },
    {
        "id": 130,
        "title": "Redmi 9A Sport (Carbon Black, 32 GB)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 775,
        "regularPrice": 882.2,
        "discount": 16.96,
        "rating": 4.2,
        "review": 130,
        "brand": "redmi",
        "category": "mobile",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/j/l/n/-original-imag7chjvhxdhhyh.jpeg?q=70",
    },
    {
        "id": 154,
        "title": "Redmi 9A Sport (Metallic Blue, 32 GB)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 1225,
        "regularPrice": 1382,
        "discount": 16.96,
        "rating": 1.2,
        "review": 154,
        "brand": "redmi",
        "category": "mobile",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/j/z/h/-original-imag7gy6tzuz3hk8.jpeg?q=70",
    },
    // redmi laptop
    {
        "id": 126,
        "title": "RedmiBook Pro Core i5 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) Thin and Light Laptop",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 999,
        "regularPrice": 1005,
        "discount": 6.96,
        "rating": 3.2,
        "review": 126,
        "brand": "redmi",
        "category": "laptop",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/kuwzssw0/computer/x/l/a/redmibook-15-pro-thin-and-light-laptop-redmi-original-imag7xhnakyazyma.jpeg?q=70",
    },
    {
        "id": 105,
        "title": "RedmiBook 15 Core i3 11th Gen - (8 GB/512 GB SSD/Windows 10 Home) Thin and Light Laptop",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 1599,
        "rating": 2.2,
        "review": 105,
        "brand": "redmi",
        "category": "laptop",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/kuwzssw0/computer/x/l/a/redmibook-15-pro-thin-and-light-laptop-redmi-original-imag7xhnakyazyma.jpeg?q=70",
    },
    // redmi tablet
    {
        "id": 129,
        "title": "REDMI Pad 6 GB RAM 128 GB ROM 10.61 Inch with Wi-Fi Only Tablet (Moonlight Silver)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 99,
        "rating": 2.2,
        "review": 129,
        "brand": "redmi",
        "category": "tablet",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/tablet/h/8/s/-original-imaggp4gegxb6qhj.jpeg?q=70",
    },
    {
        "id": 109,
        "title": "REDMI Pad 4 GB RAM 64 GB ROM 10.61 Inch with Wi-Fi Only Tablet (Graphite Gray)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 359,
        "regularPrice": 450.2,
        "discount": 12.96,
        "rating": 2.2,
        "review": 109,
        "brand": "redmi",
        "category": "tablet",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/xif0q/tablet/x/6/w/-original-imaggp4gpupykftz.jpeg?q=70",
    },
    {
        "id": 119,
        "title": "REDMI Pad 4 GB RAM 128 GB ROM 10.61 Inch with Wi-Fi Only Tablet (Graphite Gray)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 859,
        "regularPrice": 950.2,
        "discount": 12.96,
        "rating": 2.2,
        "review": 119,
        "brand": "redmi",
        "category": "tablet",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/tablet/d/d/n/-original-imaggp4gtdze4hfd.jpeg?q=70",
    },
    // redmi earphone
    {
        "id": 120,
        "title": "Mi Basic Wired Headset with Mic  (Black, In the Ear)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 27,
        "regularPrice": 34,
        "discount": 16,
        "rating": 4.2,
        "review": 120,
        "brand": "redmi",
        "category": "earphone",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/krntoy80/headphone/j/l/n/ydjc01jy-mi-original-imag5egze7eb9taj.jpeg?q=70",
    },
    {
        "id": 151,
        "title": "Mi Wired in-Ear Earphones with Mic, Ultra Deep Bass & Metal Sound Chamber Wired Headset  (Blue, Black, In the Ear)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 427,
        "rating": 4.2,
        "review": 151,
        "brand": "redmi",
        "category": "earphone",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/kbzergw0/headphone/v/e/k/ydjc01jy-mi-original-imaft7gypwhr7uyb.jpeg?q=70",
    },
    {
        "id": 165,
        "title": "Mi Dual Driver Dynamic Bass High Definition in-Ear Earphones with Mic Wired Headset  (Blue, In the Ear)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 827,
        "rating": 4.2,
        "review": 165,
        "brand": "redmi",
        "category": "earphone",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/k7c88sw0/headphone/s/g/6/xiaomi-dual-driver-original-imafpht8n2tzygkr.jpeg?q=70",
    },
    {
        "id": 169,
        "title": "MI-STS AKG Basic Wired Headset with Mic Wired Headset Wired Headset  (Black, In the Ear)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 1227,
        "rating": 4.2,
        "review": 169,
        "brand": "redmi",
        "category": "earphone",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/xif0q/headphone/w/p/s/onplus-3-5mm-basic-wired-headphone-stereo-sports-earphone-with-original-imagjjf3aeeaa9wv.jpeg?q=70",
    },
    // apple mobile
    {
        "id": 152,
        "title": "APPLE iPhone 13 (Blue, 128 GB)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 227,
        "rating": 4.2,
        "review": 152,
        "brand": "apple",
        "category": "mobile",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70",
    },
    {
        "id": 139,
        "title": "APPLE iPhone 14 Plus (Starlight, 128 GB)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 827,
        "rating": 3.2,
        "review": 139,
        "brand": "apple",
        "category": "mobile",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/l/v/8/-original-imaghx9qudmydgc4.jpeg?q=70",
    },
    {
        "id": 106,
        "title": "APPLE iPhone 14 Plus (Purple, 128 GB)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 1227,
        "rating": 3.2,
        "review": 106,
        "brand": "apple",
        "category": "mobile",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/v/0/t/-original-imaghxa5rgcv5enm.jpeg?q=70",
    },
    {
        "id": 112,
        "title": "APPLE iPhone 12 (White, 128 GB)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 327,
        "rating": 3.2,
        "review": 112,
        "brand": "apple",
        "category": "mobile",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/j/f/9/apple-iphone-12-dummyapplefsn-original-imafwg8dkyh2zgrh.jpeg?q=70",
    },
    {
        "id": 131,
        "title": "APPLE iPhone 11 (red, 128 GB)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 98,
        "rating": 3.2,
        "review": 131,
        "brand": "apple",
        "category": "mobile",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/a/h/7/-original-imaghx9qaepzajta.jpeg?q=70",
    },
    // apple laptop
    {
        "id": 125,
        "title": "APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 1598,
        "regularPrice": 1652,
        "discount": 2.96,
        "rating": 3.2,
        "review": 125,
        "brand": "apple",
        "category": "laptop",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
    },
    {
        "id": 137,
        "title": "APPLE 2023 MacBook Pro M2 Max - (32 GB/1 TB SSD/macOS Ventura) MNWE3HN/A",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 598,
        "regularPrice": 652,
        "discount": 2.96,
        "rating": 3.2,
        "review": 137,
        "brand": "apple",
        "category": "laptop",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/computer/l/o/a/mnwc3hn-a-laptop-apple-original-imagmfhegkrgcnhp.jpeg?q=70",
    },
    {
        "id": 102,
        "title": "APPLE 2022 MacBook AIR M2 - (16 GB/256 GB SSD/Mac OS Monterey) Z15Y000Z4",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 998,
        "rating": 3.2,
        "review": 102,
        "brand": "apple",
        "category": "laptop",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/computer/v/c/a/-original-imagfdfpnjjpdhq2.jpeg?q=70",
    },
    {
        "id": 132,
        "title": "APPLE 2021 Macbook Pro M1 Pro - (16 GB/1 TB SSD/Mac OS Monterey) MKGT3HN/A",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 198,
        "rating": 3.2,
        "review": 132,
        "brand": "apple",
        "category": "laptop",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/kuyf8nk0/computer/z/k/q/mkgr3hn-a-thin-and-light-laptop-apple-original-imag7yzp78bpnzyg.jpeg?q=70",
    },
    {
        "id": 118,
        "title": "APPLE MacBook Air M1 - (16 GB/256 GB SSD/Mac OS Big Sur) Z124J001KD",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 91,
        "rating": 3.2,
        "review": 118,
        "brand": "apple",
        "category": "laptop",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/kyt0ya80/computer/b/v/q/na-thin-and-light-laptop-apple-original-imagaygvkp7pjexm.jpeg?q=70",
    },
    // apple tablet
    {
        "id": 143,
        "title": "APPLE iPad (10th Gen) 64 GB ROM 10.9 inch with Wi-Fi Only (Blue)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 725,
        "rating": 2.2,
        "review": 143,
        "brand": "apple",
        "category": "tablet",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/tablet/r/4/m/-original-imagj72vqsfqgzpf.jpeg",
    },
    {
        "id": 110,
        "title": "APPLE iPad (9th Gen) 64 GB ROM 10.2 inch with Wi-Fi Only (Space Grey)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 1685,
        "regularPrice": 1752.2,
        "discount": 2.96,
        "rating": 3.2,
        "review": 110,
        "brand": "apple",
        "category": "tablet",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
    },
    {
        "id": 138,
        "title": "APPLE iPad Air (4th Gen) 256 GB ROM 10.9 inch with Wi-Fi Only (Rose Gold)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 75,
        "regularPrice": 81,
        "discount": 12.96,
        "rating": 3.2,
        "review": 138,
        "brand": "apple",
        "category": "tablet",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/kf75fgw0/tablet/f/g/v/apple-myfp2hn-a-original-imafvpqabxyxg7nf.jpeg?q=70",
    },
    {
        "id": 121,
        "title": "APPLE iPad Air (5th gen) 64 GB ROM 10.9 Inch with Wi-Fi+5G (space Grey)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 189,
        "regularPrice": 190,
        "discount": 12.96,
        "rating": 3.2,
        "review": 121,
        "brand": "apple",
        "category": "tablet",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/l0jwbrk0/tablet/1/d/4/-original-imagcbjg9qd9hpfk.jpeg?q=70",
    },
    {
        "id": 153,
        "title": "APPLE iPad (10th Gen) 64 GB ROM 10.9 inch with Wi-Fi+5G (Silver)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 525,
        "rating": 3.2,
        "review": 153,
        "brand": "apple",
        "category": "tablet",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/tablet/x/z/7/-original-imagj72tqndg7rps.jpeg?q=70",
    },
    // apple earphone
    {
        "id": 157,
        "title": "APPLE EarPods with Lightning Connector Wired Headset  (White, In the Ear)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 550,
        "rating": 3.2,
        "review": 157,
        "brand": "apple",
        "category": "earphone",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/jg15aq80/headphone/n/t/7/xrp-iphone-compatible-3-5mm-stereo-earphone-handsfree-for-original-imaepjzmthscubxj.jpeg?q=70",
    },
    {
        "id": 111,
        "title": "APPLE EarPods with 3.5mm Headphone Plug Wired Headset  (White, In the Ear)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 425,
        "rating": 3.2,
        "review": 111,
        "brand": "apple",
        "category": "earphone",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/jsm3vrk0/smart-headphone/k/j/g/ns6-s6-bluetooth-neckband-headset-with-sports-running-headphone-original-imaemjzdsungh2yw.jpeg?q=70",
    },
    // samsung mobile
    {
        "id": 146,
        "title": "SAMSUNG Galaxy F04 (Opal Green, 64 GB)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 389,
        "rating": 3.2,
        "review": 146,
        "brand": "samsung",
        "category": "mobile",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/w/d/o/-original-imaghgbyhy6banxv.jpeg?q=70",
    },
    {
        "id": 136,
        "title": "SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 763,
        "regularPrice": 775,
        "discount": 5,
        "rating": 3.2,
        "review": 136,
        "brand": "samsung",
        "category": "mobile",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70",
    },
    {
        "id": 122,
        "title": "SAMSUNG Galaxy M04 (Dark Blue, 64 GB)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 489,
        "rating": 3.2,
        "review": 122,
        "brand": "samsung",
        "category": "mobile",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/n/h/galaxy-m04-sm-m045f-samsung-original-imagh8ghfyxznzyu.jpeg?q=70",
    },
    {
        "id": 140,
        "title": "SAMSUNG Galaxy F14 5G (B.A.E. Purple, 128 GB)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 1234,
        "regularPrice": 1252.2,
        "discount": 12.96,
        "rating": 3.2,
        "review": 140,
        "brand": "samsung",
        "category": "mobile",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/e/0/c/galaxy-f14-5g-sm-e146blvgins-samsung-original-imagnzdkxyfqhd6r.jpeg?q=70",
    },
    {
        "id": 162,
        "title": "SAMSUNG Galaxy F23 5G (Forest Green, 128 GB)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 788,
        "rating": 3.2,
        "review": 162,
        "brand": "samsung",
        "category": "mobile",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/o/p/z/-original-imagcg22pf79cgau.jpeg?q=70",
    },
    // samsung laptop
    {
        "id": 124,
        "title": "SAMSUNG Galaxy Book3 Core i7 Core i7 13th Gen - (16 GB/512 GB SSD/Windows 11 Home) Galaxy Book3 Thin ",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 975,
        "regularPrice": 1000,
        "discount": 1.5,
        "rating": 3.2,
        "review": 124,
        "brand": "samsung",
        "category": "laptop",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/computer/b/y/f/galaxy-book3-thin-and-light-laptop-samsung-original-imagnb277ppuutjd.jpeg?q=70",
    },
    {
        "id": 147,
        "title": "SAMSUNG Core i7 12th Gen - (16 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 1875,
        "regularPrice": 2000,
        "discount": 12.96,
        "rating": 3.2,
        "review": 128,
        "brand": "samsung",
        "category": "laptop",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/computer/d/j/e/galaxy-book2-plastic-thin-and-light-laptop-samsung-original-imaghkp8zvqhfzrh.jpeg?q=70",
    },
    {
        "id": 107,
        "title": "SAMSUNG Galaxy Book2 Core i5 12th Gen - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 1599,
        "regularPrice": 1625,
        "discount": 8.96,
        "rating": 3.2,
        "review": 107,
        "brand": "samsung",
        "category": "laptop",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/computer/d/j/e/galaxy-book2-plastic-thin-and-light-laptop-samsung-original-imaghkp8zvqhfzrh.jpeg?q=70",
    },
    // samsung tablet
    {
        "id": 158,
        "title": "SAMSUNG Galaxy Tab A8 4 GB RAM 64 GB ROM 10.5 inch with Wi-Fi+4G Tablet (Gray)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 165,
        "regularPrice": 169,
        "discount": 1.96,
        "rating": 3.2,
        "review": 158,
        "brand": "samsung",
        "category": "lablet",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/ky7lci80/tablet/e/d/m/sm-x205nzaeinu-samsung-original-imagahrshg78gwvb.jpeg?q=70",
    },
    {
        "id": 103,
        "title": "SAMSUNG Galaxy Tab S7+ With Stylus 6 GB RAM 128 GB ROM 12.4 inch with Wi-Fi Only Tablet (Mystic Black)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 775,
        "rating": 3.2,
        "review": 103,
        "brand": "samsung",
        "category": "tablet",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/kdrpksw0/tablet/w/f/6/samsung-sm-t975nzkainu-original-imafuhg9tfydgg78.jpeg?q=70",
    },
    {
        "id": 128,
        "title": "SAMSUNG Galaxy Tab S6 Lite With Stylus 4 GB RAM 64 GB ROM 10.4 inch with Wi-Fi Only Tablet (Blue)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 575,
        "regularPrice": 600,
        "discount": 4,
        "rating": 3.2,
        "review": 128,
        "brand": "samsung",
        "category": "tablet",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/l4hcx3k0/tablet/v/t/t/sm-p613nzbainu-samsung-original-imagfdad5phxgz4p.jpeg?q=70",
    },
    {
        "id": 135,
        "title": "SAMSUNG Galaxy Tab S8 Ultra With Stylus 12 GB RAM 256 GB ROM 14.6 inch with Wi-Fi Only Tablet ",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 1025,
        "regularPrice": 1125,
        "discount": 5,
        "rating": 3.2,
        "review": 35,
        "brand": "samsung",
        "category": "tablet",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/kzrbiq80/tablet/x/k/n/-original-imagbpezhgfrhb8z.jpeg?q=70",
    },
    // samsung earphone
    {
        "id": 145,
        "title": "SAMSUNG Hands-Free EHS61ASFWE (GH59-11849C) 3.5 mm jack Wired Headset  (White, In the Ear)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 45,
        "regularPrice": 50,
        "discount": 2.5,
        "rating": 3.2,
        "review": 145,
        "brand": "samsung",
        "category": "earphone",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/k6l2vm80/headphone/h/z/z/samsung-hands-free-ehs61asfwe-gh59-11849c-3-5-mm-jack-original-imafzzuwhy6smvmg.jpeg?q=70",
    },
    {
        "id": 116,
        "title": "SAMSUNG YS 3.5 MM JACK Wired Headset  (White, In the Ear)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 125,
        "regularPrice": 135,
        "discount": 5,
        "rating": 3.2,
        "review": 116,
        "brand": "samsung",
        "category": "earphone",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/k6ci8i80/headphone/u/4/x/samsung-ys-3-5-mm-jack-original-imafzu6akzhbjja2.jpeg?q=70",
    },
    {
        "id": 159,
        "title": "SAMSUNG Original IC050 Type-C Earphone Wired Headset  (Black, In the Ear)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 150,
        "rating": 3.2,
        "review": 159,
        "brand": "samsung",
        "category": "earphone",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/xif0q/headphone/p/4/v/original-ic050-type-c-earphone-samsung-original-imaghrfrpa4jc4ze.jpeg?q=70",
    },
    {
        "id": 117,
        "title": "SAMSUNG EHS64 Wired Headset  (Black, In the Ear)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 25,
        "regularPrice": 30,
        "discount": 1,
        "rating": 3.2,
        "review": 117,
        "brand": "samsung",
        "category": "earphone",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/k0vbgy80pkrrdj/headphone/f/8/c/samsung-ehs64avfbecinu-original-imaf8eydm93zuzxs.jpeg?q=70",
    },
    // asus mobilec
    {
        "id": 149,
        "title": "ASUS ROG 5s (Black, 128 GB)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 135,
        "regularPrice": 150,
        "discount": 4,
        "rating": 3.2,
        "review": 149,
        "brand": "asus",
        "category": "mobile",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/ky7lci80/mobile/t/x/j/-original-imagahvge92r5fmm.jpeg?q=70",
    },
    {
        "id": 155,
        "title": "ASUS Zenfone Go 4.5 (Black, 8 GB)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 175,
        "regularPrice": 190,
        "discount": 16,
        "rating": 3.2,
        "review": 155,
        "brand": "asus",
        "category": "mobile",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/mobile/y/x/z/asus-zenfone-max-4-5-zc451tg-1a023in-original-imaeedg6yfrzgfpd.jpeg?q=70",
    },
    {
        "id": 142,
        "title": "ASUS ZenFone Max M2 (Black, 32 GB)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 256,
        "rating": 3.2,
        "review": 142,
        "brand": "asus",
        "category": "mobile",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/jp02t8w0/mobile/z/z/e/asus-zenfone-max-m2-zb632kl-4a004in-original-imafbcafmv6tgqjz.jpeg",
    },
    {
        "id": 144,
        "title": "ASUS ZenFone Max M2 (Black, 32 GB)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 465,
        "regularPrice": 475,
        "discount": 7,
        "rating": 3.2,
        "review": 144,
        "brand": "asus",
        "category": "mobile",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/jnc2bgw0/mobile/8/g/h/asus-zenfone-lite-l1-za551kl-4a021in-original-imafafe3qwqkg4sv.jpeg?q=70",
    },
    // asus laptop
    {
        "id": 141,
        "title": "ASUS VivoBook 14 (2021) Celeron Dual Core - (4 GB/256 GB SSD/Windows 11 Home) X415MA-BV011W Thin",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 599,
        "regularPrice": 625,
        "discount": 8,
        "rating": 3.2,
        "review": 141,
        "brand": "asus",
        "category": "laptop",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/l2m78280/computer/z/e/f/-original-imagdx9szs8xz2rk.jpeg?q=70",
    },
    {
        "id": 115,
        "title": "ASUS Vivobook 15 Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X515EA-EJ328WS ",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 725,
        "rating": 3.2,
        "review": 115,
        "brand": "asus",
        "category": "laptop",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/computer/o/t/h/-original-imagg6t9pauha4t7.jpeg?q=70",
    },
    {
        "id": 123,
        "title": "ASUS TUF Gaming A15 Ryzen 5 Hexa Core AMD R5-4600H - (8 GB/1 TB SSD/Windows 11 Home/4 GB Graphics",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 825,
        "regularPrice": 850,
        "discount": 2,
        "rating": 3.2,
        "review": 123,
        "brand": "asus",
        "category": "laptop",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/computer/i/j/u/-original-imaggzes4pd7ptkx.jpeg?q=70",
    },
    {
        "id": 134,
        "title": "ASUS ROG Strix G15 Ryzen 7 Octa Core AMD R7-4800H - (16 GB/1 TB SSD/Windows 11 Home/4 GB Graphics",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 1499,
        "regularPrice": 1525,
        "discount": 14,
        "rating": 3.2,
        "review": 134,
        "brand": "asus",
        "category": "laptop",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/l3vxbbk0/computer/g/u/y/-original-imagewgtfgzf8fdd.jpeg?q=70",
    },
    {
        "id": 148,
        "title": "ASUS Vivobook 16X Ryzen 7 Octa Core AMD Ryzen 7 5800H - (16 GB/512 GB SSD/Windows 11 Home) ",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 1999,
        "regularPrice": 1199,
        "discount": 17,
        "rating": 3.2,
        "review": 148,
        "brand": "asus",
        "category": "laptop",
        "thumbnail": "https://rukminim1.flixcart.com/image/312/312/xif0q/computer/g/n/i/m1603qa-mb712ws-notebook-asus-original-imagghmes5azfudv.jpeg?q=70",
    },
    // asus tablet
    {
        "id": 108,
        "title": "ASUS Tablet Intel Pentium Silver N6000, 13.3 inches(33.7cm) FHD OLED Touch 2-in-1",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 512,
        "regularPrice": 525,
        "discount": 17,
        "rating": 3.2,
        "review": 108,
        "brand": "asus",
        "category": "tablet",
        "thumbnail": "https://m.media-amazon.com/images/I/71f+slM-BDL._AC_UY327_QL65_.jpg",
    },
    // asus earphone
    {
        "id": 127,
        "title": "ASUS ROG Cetra II Wired Gaming Headset  (Black, In the Ear)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 69,
        "rating": 3.2,
        "review": 127,
        "brand": "asus",
        "category": "earphone",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/kw2fki80/headphone/m/b/1/rog-cetra-ii-asus-original-imag8tsxxdbeeqhy.jpeg?q=70",
    },
    {
        "id": 104,
        "title": "ASUS ROG Cetra RGB Wired Gaming Headset  (Black, In the Ear)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 130,
        "regularPrice": 135,
        "discount": 5,
        "rating": 3.2,
        "review": 104,
        "brand": "asus",
        "category": "earphone",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/krp94sw0/headphone/l/z/v/rog-cetra-rgb-asus-original-imag5fjuyvz3s8fw.jpeg?q=70",
    },
    {
        "id": 156,
        "title": "ASUS ROG Cetra II Core Wired Gaming Headset  (Moonlight White, In the Ear)",
        "description": "An apple mobile which is nothing like apple An apple mobile which is nothing like apple",
        "price": 268,
        "rating": 3.2,
        "review": 156,
        "brand": "asus",
        "category": "earphone",
        "thumbnail": "https://rukminim1.flixcart.com/image/832/832/krp94sw0/headphone/w/i/v/rog-cetra-ii-core-asus-original-imag5fjutfuryee6.jpeg?q=70",
    },
]
export default productsJson