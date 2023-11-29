How long did you spend on the coding test? 
---I spent nearly 4-5 hrs for this coding test.
What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
---New Suspense Feature is something which I think of as the useful feature added to latest verison. It lets you declaratively specify the loading state for a part of the component tree if it’s not yet ready to be displayed:
  <Suspense fallback={<Spinner />}>
    <Comments />
  </Suspense>
How would you track down a performance issue in production? Have you ever had to do this?
---We can track performance issue by generating Lighthouse Report in production.
If you had more time, what additional features or improvements would you consider adding to the task management application?
---Secure access. Different to-do list profiless. Some personal ones which only you can access
---Alert message or notification sent to you when due date is near
