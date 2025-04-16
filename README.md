# url for project

https://final-todd-lee-cop4808s-projects.vercel.app/

# Web Development Final Project - Hobby Hub

Submitted by: Todd A. Lee z23500617

What is your passion? What topic do you always love to learn more about and can't wait to share with everyone else? In this project, you will be building an entire forum surrounding your favorite topic, be it a sport, an academic subject, or a video game! Your web app will allow users to create posts and see a feed of them on the home page, edit, delete, or leave comments underneath them for discussions, and give upvotes for posts that you like! Take full creative control over the look and feel of the web app, and make sure to employ the web design principles that you learned! Ultimately, you will create an awesome forum for an online community for people who share your hobby!

Time spent: 10 hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **Web app includes a create form that allows the user to create posts**
  - Form requires users to add a post title
  - Forms should have the *option* for users to add: 
    - additional textual content
    - an image added as an external image URL
- [x] **Web app includes a home feed displaying previously created posts**
  - Web app must include home feed displaying previously created posts
  - By default, each post on the posts feed should show only the post's:
    - creation time
    - title 
    - upvotes count
  - Clicking on a post should direct the user to a new page for the selected post
- [x] **Users can view posts in different ways**
  - Users can sort posts by either:
    -  creation time
    -  upvotes count
  - Users can search for posts by title
- [x] **Users can interact with each post in different ways**
  - The app includes a separate post page for each created post when clicked, where any additional information is shown, including:
    - content
    - image
    - comments
  - Users can leave comments underneath a post on the post page
  - Each post includes an upvote button on the post page. 
    - Each click increases the post's upvotes count by one
    - Users can upvote any post any number of times

- [x] **A post that a user previously created can be edited or deleted from its post pages**
  - After a user creates a new post, they can go back and edit the post
  - A previously created post can be deleted from its post page

The following **optional** features are implemented:


- [ ] Web app implements pseudo-authentication
- [ ] Users can repost a previous post by referencing its post ID. On the post page of the new post
- [ ] Users can customize the interface
- [ ] Users can add more characterics to their posts
- [ ] Web app displays a loading animation whenever data is being fetched


## Video Walkthrough

Here's a walkthrough of implemented user stories:

![Video Walkthrough](https://res.cloudinary.com/da8mvrhqz/image/upload/v1744785239/ychlwndrwzcptyfkurhe.gif)

GIF created with ffmpeg


## Notes

One challenge was organizing the file structure in a clean and scalable way as the app grew. We also spent time refining the styling to keep everything minimal and consistent across pages. Minor issues like routing and form state were quickly resolved with some cleanup.

## License

Copyright 2025 Todd A. Lee

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.