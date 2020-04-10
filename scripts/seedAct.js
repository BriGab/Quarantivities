const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/activities", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
 mongoose.connection
 .once("open", () => console.log("connected"))
 .on("error", (error) => {
    console.log("err: ", error)
 })

const activitySeed = [
    {
        title: "Venus Williams' at-home Workout", 
        thumbnail: "/images/fitness.png",
        description: "Workout like the stars with this at-home workout tutorial by Venus Williams",
        href: " https://www.popsugar.com/fitness/venus-williams-instagram-at-home-workout-47344751",
        likes: 0,
        category: "Fitness" 
    }, 
    {
        title: "Black Bean Burger", 
        thumbnail: "/images/cooking.png",
        description: "A yummy way to eat semi-healthy and enjoy it!",
        href: "https://sallysbakingaddiction.com/best-black-bean-burgers/",
        likes: 0,
        category: "Cooking"
    },
    {
        title: "How to Cut your Own Hair", 
        thumbnail: "/images/random.png",
        description: "Don't let those locks get out of hand in the quarantine!",
        href: "https://www.allure.com/story/how-to-cut-your-own-hair",
        likes: 0,
        category: "Random"
    },
    {
        title: "Bookbinding 101", 
        thumbnail: "/images/crafts.png",
        description: "Japanese book binding technique to make your own journal",
        href: "https://www.designsponge.com/2013/03/bookbinding-101-japanese-four-hold-binding.html",
        likes: 0,
        category: "Crafts" 
    },
    {
        title: "How To Decoupage With Napkins", 
        thumbnail: "/images/crafts.png",
        description: "How To Decoupage With Napkins - Decoupage Planter",
        href: "https://placeofmytaste.com/how-to-decoupage-with-napkins-decoupage-planter/?fbclid=IwAR2tbBeD4CBuA0U4Q2s45TjmPpckwXdHtdgzED1rYwm5yKBLaaspM3HGGjA",
        likes: 0,
        category: "Crafts" 
    },
    {
        title: "Grilled Mediterranean Bruschetta Salmon", 
        thumbnail: "images/cooking.png",
        description: "Grilled Mediterranean Bruschetta Salmon Recipe",
        href: "https://www.beautifuleatsandthings.com/2018/08/23/grilled-mediterranean-bruschetta-salmon/",
        likes: 0,
        category: "Cooking" 
    },
    {
        title: "Full Body Yoga Workout", 
        thumbnail: "/images/fitness.png",
        description: "Full Body Yoga Workout For Beginners",
        href: "https://yogarove.com/full-body-yoga-workout/",
        likes: 0,
        category: "Fitness" 
    },
    {
        title: "Learn How To Line Dance", 
        thumbnail: "images/random.png",
        description: "Learn How To Line Dance",
        href: "https://www.youtube.com/watch?v=xLvpGl1wOto",
        likes: 0,
        category: "Random" 
    },
    {
        title:"20 Min Full Body Workout",
        thumbnail:"/images/fitness.png",
        description:"An intense 20 min full body workout you can do at home! No equipment necessary!",
        href:"https://www.youtube.com/watch?v=oKfNUOWuZV8", 
        likes: 0,
        category: "Fitness" 
    },
    {
        title:"DIY EASTER EGG WREATH",
        thumbnail:"images/crafts.png",
        description:"EASTER EGG WREATH TUTORIAL",
        href:"https://craftsbyamanda.com/easter-egg-wreath/",
        likes: 0,
        category: "Crafts" 
    },
    {
        title:"Tempeh Reubens",
        thumbnail:"images/cooking.png",
        description:"Vegetarian Sandwich",
        href:"https://www.myrecipes.com/recipe/tempeh-reubens",
        likes: 0,
        category: "Cooking" 
    },
    {
        title:"Throw an Indoor Picnic",
        thumbnail:"images/random.png",
        description:"Set out a picnic blanket and basket of food and eat your dinner as though you were having a picnic.",
        href:"https://www.lifehack.org/articles/lifestyle/30-fun-things-home.html",
        likes: 0,
        category: "Random"
     }, 
    {
        title: "Bacon & Spinach Stuffed Chicken",
        thumbnail: "images/cooking.png",
        description: "Bacon and chicken - yum, yum!",
        href: "https://www.delish.com/cooking/recipe-ideas/a30982780/bacon-and-spinach-stuffed-chicken-recipe/",
        likes: 0,
        category: "Cooking" 
    },
    {
        title: "Buffalo Shrimp Lettucs Wraps",
        thumbnail: "images/cooking.png",
        description: "Meet your new favorite low-carb lunch. It's super-flavorful, fresh, and it's ready in under an hour!",
        href: "https://www.delish.com/cooking/a26331032/buffalo-shrimp-lettuce-wraps-recipe/",
        likes: 0,
        category: "Cooking" 
    },
    {
        title: "Honey Walnut Shrimp",
        thumbnail: "images/cooking.png",
        description: "Trust, you'll want to eat this one allll week.",
        href: "https://www.delish.com/cooking/recipe-ideas/a25861120/honey-walnut-shrimp-recipe/",
        likes: 0,
        category: "Cooking" 
    },
    {
        title: "Home Workout #6",
        thumbnail: "images/fitness.png",
        description: "Train like Batman!",
        href: "https://www.nerdfitness.com/blog/the-7-best-at-home-workout-routines-the-ultimate-guide-for-training-without-a-gym/#at_home_workout_6",
        likes: 0,
        category: "Fitness" 
    },
    {
        title: "Angry Birds Workout Plan",
        thumbnail: "images/fitness.png",
        description: "A workout using body weight squats, pushups, pull ups and planks, varied by level of fitness",
        href: "https://www.nerdfitness.com/blog/angry-birds-workout-plan/",
        likes: 0,
        category: "Fitness" 
    },
    {
        title: "Full-Body No-Equipment Cardio Workout",
        thumbnail: "images/fitness.png",
        description: "A no equipment needed workout with videos",
        href: "https://www.self.com/gallery/full-body-bodyweight-cardio-workout",
        likes: 0,
        category: "Fitness" 
    },
    {
        title: "Quick Core Workout",
        thumbnail: "images/fitness.png",
        description: "This Abs Workout Hits Your Entire Core in Under 8 Minutes",
        href: "https://www.self.com/gallery/quick-core-workout",
        likes: 0,
        category: "Fitness" 
    },
    {
        title: "How To Make Kids' Finger Paints",
        thumbnail: "images/crafts.png",
        description: "Make your own (really thick) flour based finger paints. Never run out again!",
        href: "https://www.hgtv.com/design/make-and-celebrate/handmade/diy-thick-finger-paints",
        likes: 0,
        category: "Crafts" 
    },
    {
        title: "Cardboard Tube Seed-Starting",
        thumbnail: "images/crafts.png",
        description: "Try using old toilet paper or paper towel tubes for a budget seed-starting option.",
        href: "https://www.hgtv.com/design/make-and-celebrate/handmade/easy-diy-crafts-anyone-can-do-pictures",
        likes: 0,
        category: "Crafts" 
    },
    {
        title: "Upcycled Wine Cork Board",
        thumbnail: "images/crafts.png",
        description: "Start saving up your wine corks to make this simple recycled memo board.",
        href: "https://www.hgtv.com/design/make-and-celebrate/handmade/upcycled-wine-cork-board",
        likes: 0,
        category: "Crafts" 
    },
    {
        title: "Rainbowtize Your Books",
        thumbnail: "images/random.png",
        description: "The Unsung Perk of Putting Books in Rainbow Order",
        href: "https://www.apartmenttherapy.com/kids-room-organization-idea-books-by-color-260450",
        likes: 0,
        category: "Random" 
    },
    {
        title: "DIY Lavender Linen Spray",
        thumbnail: "images/random.png",
        description: "Feel like cleaning? Make your own essential oil spray",
        href: "https://wholefully.com/diy-lavender-linen-spray/",
        likes: 0,
        category: "Random" 
    },
    {
        title: "Block-Printing with DIY stamps",
        thumbnail: "images/crafts",
        description: "Turn basic household items into simple stamps, then create your own custom-stamped towels and napkins.",
        href: "https://www.hgtv.com/design/make-and-celebrate/handmade/how-to-block-print-napkins-with-simple-diy-stamps-pictures",
        likes: 0,
        category: "Crafts"
    },
    {
        title: "Best Pancakes Ever", 
        thumbnail: "images/cooking.png",
        description: "Recipe for Pancakes",
        href: "https://www.tasteofhome.com/recipes/the-best-ever-pancakes/",
        likes: 0,
        category: "Cooking" 
    },
    {
        title: "At Home Leg Exercise", 
        thumbnail: "images/fitness.png",
        description: "Leg Exercise for Women, No Equipment Required",
        href: "https://www.self.com/gallery/killer-legs-no-gear-required-slideshow",
        likes: 0,
        category: "Fitness" 
    },
    {
        title: "3D Star Craft", 
        thumbnail: "images/crafts.png",
        description: "Instructions for Making 3D Decor Stars",
        href: "https://www.youtube.com/watch?v=nQ4qgwDTpC4",
        likes: 0,
        category: "Crafts" 
    },
    {
        title: "Indoor Camping Date", 
        thumbnail: "images/random.png",
        description: "Ideas for a Fun Night Indoors",
        href: "http://www.darlingbedaring.com/camping-date-night-for-two-please/",
        likes: 0,
        category: "Random"
    },
    {
        title: "Write a Haiku Poem",
        thumbnail: "images/random",
        description: "A haiku (high-koo) is a short three-line poem that uses sensory language to capture a feeling or image.",
        href: "https://www.wikihow.com/Write-a-Haiku-Poem",
        likes: 0,
        category: "Random"
    },
    {
        title: "5 Books That Will Make You Happier, According to Bibliotherapists",
        thumbnail: "images/random.png",
        description: "Did you know that reading books can literally act as a form of therapy?",
        href: "https://www.goodhousekeeping.com/health/wellness/g3704/books-that-will-make-you-happier/",
        likes: 0,
        category: "Random"
    },
    {
        title: "Learn to Juggle 3 Balls",
        thumbnail: "images/random.png",
        description: "Watch a video to learn to juggle!",
        href: "https://www.youtube.com/watch?v=cqF0oRNJFys",
        likes: 0,
        category: "Random"
    },
    {
        title: "Learn to Blog",
        thumbnail: "images/random.png",
        description: "Learn how to make money on your blog.",
        href: "https://www.thesimpledollar.com/make-money/how-to-start-a-blog-a-side-business-primer/",
        likes: 0,
        category: "Random"
    },
    {
        title: "Learn a New Subject",
        thumbnail: "images/random.png",
        description: "Select and learn a new topic for FREE through MIT's Open Courseware",
        href: "https://ocw.mit.edu/index.htm",
        likes: 0,
        category: "Random"
    },
    {
        title: "Make Colorful Leaves With Your Kids",
        thumbnail: "images/crafts.png",
        description: "Bring out the coffee filters and markers to create a twist on leaf projects.",
        href: "https://www.scholastic.com/teachers/articles/teaching-content/crafts-colorful-fall-leaves/",
        likes: 0,
        category: "Crafts"
    },
    {
        title: "Recycled Egg-Carton Flowers",
        thumbnail: "images/crafts.png",
        description: "Watch young artists blossom as they transform egg cartons into colorful flowers. Video included!",
        href: "https://www.scholastic.com/teachers/articles/teaching-content/crafts-recycled-egg-carton-flowers/",
        likes: 0,
        category: "Crafts"
    },
    {
        title:"Bum Buster Workout",
        thumbnail:"images/fitness.png",
        description:"A 15 minute at home butt/bum/glute workout that is intense! No equipment needed for this home workout!",
        href:"https://www.youtube.com/watch?v=bggX6ocjojk", 
        likes: 0,
        category: "Fitness"
            },
        {
        title:"Upcycle: Straw Wreath",
        thumbnail:"images/crafts.png",
        description:"How to Make a Starburst Wreath from Paper Straws",
        href:"https://designimprovised.com/2018/09/how-to-make-starburst-wreath-from-paper-straws.html", 
        likes: 0,
        category: "Crafts"
            },
        {
        title:"Banana Bread",
        thumbnail:"images/cooking.png",
        description:"Very basic and forgiving recipe that takes 10 minutes for banana bread",
        href:"https://www.thekitchn.com/how-to-make-banana-bread-the-simplest-easiest-recipe-139900", 
        likes: 0,
        category: "Cooking"
            },
        {
        title:"DIY Beauty Masks",
        thumbnail:"images/random.png",
        description:"13 Must-Follow Recipes for the Perfect Homemade Face Masks",
        href:"https://www.thehealthy.com/beauty/face-body-care/homemade-facial-masks-recipes/", 
        likes: 0,
        category: "Random"
    },
    {
        title:"No Equipment Workouts",
        thumbnail:"images/fitness.png",
        description:"Visual Workout Guides for Full Bodyweight, No Equipment Training",
        href:"http://thirdmonk.net/lifestyle/visual-workout-guides-bodyweight.html", 
        likes: 0,
        category: "Fitness"
    },
    {
        title:"Plastic Spoon Crafts",
        thumbnail:"images/crafts.png",
        description:"16 crafts you can do at home by upcycling your plastic spoons",
        href:"https://www.alittlecraftinyourday.com/2016/04/30/plastic-spoon-crafts/", 
        likes: 0,
        category: "Crafts"
    },
    {
        title:"Healthy Breakfast Smoothies",
        thumbnail:"images/cooking.png",
        description:"These healthy smoothie recipes provide filling fiber and protein for energy",
        href:"https://kristineskitchenblog.com/21-healthy-breakfast-smoothie-recipes/", 
        likes: 0,
        category: "Cooking"
    },
    {
        title:"Guide to Organizing Closet",
        thumbnail:"images/random.png",
        description:"The Ultimate Guide to Organizing Your Closet and Making Life Easier",
        href:"https://www.thespruce.com/how-to-organize-your-closet-2648411", 
        likes: 0,
        category: "Random"
    },  
    {
        title: "Makeover Your Plastic Storage Drawers",
        thumbnail: "images/crafts.png",
        description: "Add some color to your ugly plastic storage drawer.",
        href: "https://craftsbyamanda.com/makeover-plastic-storage-drawers/",
        likes: 0,
        category: "Crafts"
    },
    {
        title: "Upcycled Dog Toy",
        thumbnail: "images/crafts.png",
        description: "With just scissors and a shirt you can make your furry pal a new toy.",
        href: "https://www.favecrafts.com/Pet-Crafts/Easy-Upcycled-Dog-Toy",
        likes: 0,
        category: "Crafts"
    },
    {
        title: "At-Home Workout Using Only Your Stairs",
        thumbnail: "images/fitness.png",
        description: "You can do this 20-minute stair workout right at home.",
        href: "https://www.livestrong.com/article/13725583-20-minute-at-home-workout-stairs/",
        likes: 0,
        category: "Fitness"
    },
]
    db.Activity
    .deleteMany({})
    .then(() => db.Activity.collection.insertMany(activitySeed))
    .then(data => {
        console.log(data.result.n + "records inserted")
        process.exit(0)
    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    });
  