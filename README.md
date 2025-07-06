# Lit-Amor-Full-Stack-Development-internship
It is an Internship Assignment
HiddenSpotsApp/
├── client/                          # React Native frontend
│   ├── App.js                      # Main app entry
│   ├── screens/
│   │   ├── MapScreen.js           # Interactive discovery map
│   │   ├── SpotDetailsScreen.js   # Spot details with stories/photos
│   │   ├── SubmitSpotScreen.js    # Spot submission form
│   │   ├── FeedScreen.js          # Smart discovery feed
│   ├── components/
│   │   ├── RatingComponent.js     # Community rating system
│   │   ├── PhotoGallery.js        # Photo gallery display
│   │   ├── CommentSection.js      # Comment system
│   ├── assets/                    # Images, icons
│   └── navigation/                # React Navigation setup
├── server/                         # Node.js/Express backend
│   ├── index.js                   # Server entry
│   ├── models/
│   │   ├── Spot.js               # MongoDB spot schema
│   │   ├── Comment.js            # MongoDB comment schema
│   ├── routes/
│   │   ├── spots.js              # API routes for spots
│   │   ├── comments.js           # API routes for comments
│   ├── middleware/
│   │   └── imageUpload.js        # Cloudinary image processing
│   └── config/
│       ├── db.js                 # MongoDB connection
│       └── cloudinary.js         # Cloudinary config
├── README.md                      # Project documentation
└── package.json                   # Dependencies
