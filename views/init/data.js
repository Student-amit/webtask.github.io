

const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
        country: "India",
        location: "Taj Mahal",
        price:5500,


        hotels: 
            {
                name: "The Oberoi Amarvilas",
                address: "Taj East Gate Road, Agra, Uttar Pradesh 282001, India",
                image: "https://example.com/oberoi_amarvilas.jpg",
                //price:5500
            },
           
        
    },
    {
        title: "Historic Villa in Mumbai",
        description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
        country: "India",
        location: "Gateway of India",
        price:2000,
        hotels: [
            {
                name: "The Taj Mahal Palace",
                address: "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001, India",
                image: "https://example.com/taj_mahal_palace.jpg",
               
            },
          
        ]
    },
    {
        title: "Art Deco Apartment in Miami",
        description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        country: "France",
        location: "Eiffel Tower",
        price:3200,
        hotels: [
            {
                name: "Shangri-La Hotel, Paris",
                address: "10 Avenue d'Iéna, 75116 Paris, France",
                image: "https://example.com/shangri_la_paris.jpg",
                
            },

        ]
    },

    {
        title: "Modern Loft in Downtown",
        description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        country: "USA",
        location: "Statue of Liberty",
        price:5200,
        hotels: [
            {
                name: "The Ritz-Carlton New York, Battery Park",
                address: "2 West St, New York, NY 10004, USA",
                image: "https://example.com/ritz_carlton_ny.jpg",
            
            },
            
        ]
    },
    {
        title: "Historic Villa in Tuscany",
        description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        country: "Italy",
        location: "Colosseum",
        price:4100,
        hotels: [
            {
                name: "Hotel Palazzo Manfredi",
                address: "Via Labicana, 125, 00184 Roma RM, Italy",
                image: "https://example.com/palazzo_manfredi.jpg",
            },
           
        ]
    },
    {
        title: "Modern Apartment in Tokyo",
        description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        country: "Japan",
        location: "Tokyo",
        price:3500,
        hotels: [
            {
                name: "Fuji View Hotel",
                address: "Kawaguchi Asakawa 511, Fujikawaguchiko, Minamitsuru District, Yamanashi 401-0303, Japan",
                image: "https://example.com/fuji_view_hotel.jpg",
               
            },

        ]
    },
    {
        title: "Historic Canal House",
        description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
        country: "Australia",
        location: "Sydney Opera House",
        price:6300,
        hotels: [
            {
                name: "Park Hyatt Sydney",
                address: "7 Hickson Rd, The Rocks NSW 2000, Australia",
                image: "https://example.com/park_hyatt_sydney.jpg",
               
            },
            
        ]
    },
    {
        title: "Charming Cottage in the Cotswolds",
        description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        country: "Brazil",
        location: "Christ the Redeemer",
        price:5300,
        hotels: [
            {
                name: "Belmond Copacabana Palace",
                address: "Avenida Atlântica, 1702 - Copacabana, Rio de Janeiro - RJ, 22021-001, Brazil",
                image: "https://example.com/copacabana_palace.jpg",
                
            },
           
        ]
    },
    {
        title: "Eco-Friendly Treehouse Retreat",
        description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
        country: "Egypt",
        location: "Great Pyramid of Giza",
        price:4500,
        hotels: [
            {
                name: "Marriott Mena House, Cairo",
                address: "6 Pyramids Road, Giza, Cairo, Egypt",
                image: "https://example.com/mena_house_cairo.jpg",
               
            },
          
        ]
    }
];




module.exports={data:sampleListings};