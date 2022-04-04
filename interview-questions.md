# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: Migrations can be used to update the database! I need to research the rest. 

  Researched answer: A developer can perform a migration to create a relationship between two databases using a foreign key. The foreign key would be named has_many :students and I think it would be on the Cohort model.



2. Which RESTful routes must always be passed params? Why?

  Your answer: I'm guessing it would have to be SHOW, EDIT, UPDATE, and DESTROY.

  Researched answer: I was correct because each of those RESTful routes need to be directly identified in order to have an action be taken on them. How can you delete something if you don't know what you're deleting?



3. Name three rails generator commands. What is created by each?

  Your answer: 'rails generate controller' creates a controller for your rails application, 'rails generate model' creates a model, and 'rails generate migration' updates your database!

  Researched answer: Like I stated, 'rails generate controller' creates a controller for your rails application. The command 'rails generate model' creates a db model which means we are creating the shape of our database (what columns, rows), Lastly, 'rails generate migration' allows you to add new columns to your db after it has already been created.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          
INDEX; displays all students
action: "POST"   location: /students       
SHOW; displays just one student
action: "GET"    location: /students/new
NEW; presents a form to insert data for a new student
action: "GET"    location: /students/2  
CREATE; makes a new student
action: "GET"    location: /students/2/edit    
EDIT; Edits a student in the database
action: "PATCH"  location: /students/2      
UPDATE; Pushes updates made on a student in the database
action: "DELETE" location: /students/2      
DESTROY; Deletes a student!


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1) As a user, I can see a landing/home page that displays 
2) As a user, I can add new tasks to my to-do list
3) As a user, I can see all tasks
4) As a user, I can click on each task, individually
5) As a user, I can navigate between each task
6) As a user, I can edit tasks
7) As a user, I can delete tasks
8) As a user, I can check/uncheck tasks on my list
9) As a user, I can create multiple to-do lists
10) As a user, I can track lists by date/time
