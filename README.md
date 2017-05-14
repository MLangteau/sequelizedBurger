# sequelizedBurger

###  sequelizedBurger is a logger using MySQL, Node, Express, Handlebars and a Sequelize.
###  I altered my other GitHub project from using ORM to Sequelize.  Therefore, the usages are similar.

### The User may do the following: (using 'nodemon server.js' from Git Bash or the terminal) 

    1.  Allows users to view the Eat-Da-Burger! menu with all available burgers displayed. (see Screenshot #1).
    
######    ![Alt text](public/assets/img/eatDaBurger.png?raw=true "Screenshot #1") 
    
    2.  Allows users to "Add a Burger" to the the Burger Menu, then press "Add A Burger/Submit". (see Screenshot #2)

######    ![Alt text](public/assets/img/addABurger.png?raw=true "Screenshot #2") 
    
    3.  The new burger will be added to the database and will also be displayed on the left side:
    (Burgers Ready to be Eaten!) (see Screenshot #3)
    
######    ![Alt text](public/assets/img/readyBurger.png?raw=true "Screenshot #3")

    4.  Allows users to "Eat the burger" by clicking the "Devour it" button.  The devoured burger will be updated in 
    the database (where devoured is true).  It will then be displayed on the right side (Burgers Already Devoured!) 
    (see Screenshot #4)
    
######   ![Alt text](public/assets/img/devourABurger.png?raw=true "Screenshot #4")

    5.  Allows users to "Delete a Burger" by clicking the red "Delete!" button on any Devoured burger.  The burger 
    will be deleted from the database.  Also the deleted burger will be taken off of the right-side display 
    (Burgers Already Devoured!)  (see Screenshot #5)
        
######   ![Alt text](public/assets/img/deletedBurger.png?raw=true "Screenshot #5")
