# cpnt270-a4
- Jessica Watson

### Client User Story
- Start up business wants to spend less resources to update website with success stories.
- Overworked store owner wants to spend less time on technology and more time with his family.
- Underpaid developer utilizing already created API for customer live updates.

### Target Market
- The target market for this application is a small Startup company who does not want to spend a ton of time updating their webpage with their latest achievements. This integration would really help the overworked business owner to allow the company that he has hired to take photos of his works to upload directly to Instagram, cutting out the time it would take to update his own webpage. I believe Instagram is the best choice of social media because it is widely used, has a small and understandable UI that so any owner can produce great looking content in a short time.

### Steps to make your life easier with integration
1. Go to your [website](https://upbeat-wozniak-cde83f.netlify.app/) take note of the current post displayed.
2. Log into your instagram account, you will find the instructions in a separate document for privacy reasons.
3. Please take a look at this [website](https://help.instagram.com/442418472487929) for posting instructions. 
    3a. You can use this as an example, click on this [link](https://images.unsplash.com/photo-1637756520113-e42adcfc83ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=718&q=80) right click and select save image as, then save the image in your computer. If on a mobile device click and hold for save options. Then open up instagram and upload your image to the platform then add this caption.
    > Who doesn't love a fresh slice, look how our neon lit up the front of this pizzeria! Take a look at this photo here, https://unsplash.com/t/street-photography
#signsofneon #lovemyneon
5. Once you have finished adding your content click share.
6. Navigate back to your webpage to see your band new post automatically update.

### Understanding your API
- If you are wondering about the capabilities of your API please visit this [page](https://developers.facebook.com/docs/instagram-api/overview) for items such as general usage, rate limits, authentication methods.
- To create a token please reference this [document](https://docs.oceanwp.org/article/487-how-to-get-instagram-access-token) to help with step by step instructions.
- All endpoint references must start with **graph.instagram.com**

### Don't worry you are secure
- You can sleep better at night knowing all of your keys and tokens are hidden within netlify, they are secreted away behind a netlify function. If you would like to check it out yourself here is some handy [documentation](https://answers.netlify.com/t/support-guide-how-do-i-keep-my-api-keys-tokens-safe-using-netlify-functions/293). 

#### Annotations
- Thank you to [Tony Grimes](https://github.com/acidtone) for the js code.
```
const init = async () => {
  const response = await fetch('/.netlify/functions/signs')
  const data = await response.json()

  const neon = data.find((item) => item.caption.includes('#signsofneon'))

  document.querySelector('.container').innerHTML = `
  <figure>
    <img src="${neon.url}" alt="Photo from instagram"
    <figcaption>${neon.caption}</figcaption>
  </figure>
  `
}
init()
```
- [Photo of restaurant store front](https://images.unsplash.com/photo-1637275893069-5e3929f542ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80) from [Jon Tyson](https://unsplash.com/@jontyson) with [license](https://unsplash.com/license)
- Photo of "Play" by <a href="https://unsplash.com/@gabrieldizzi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Gabriel Dizzi</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> with [license](https://unsplash.com/license)
- Photo "we love pizza" by <a href="https://unsplash.com/@eags_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eagan Hsu</a> on <a href="https://unsplash.com/t/street-photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> with [license](https://unsplash.com/license)
      