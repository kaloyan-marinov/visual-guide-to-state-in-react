source: https://daveceddia.com/visual-guide-to-state-in-react/

# Introduction

... in React parlance, ... “state” is an object that represents the parts of the app
that can change. Each component can maintain its own state, which [- in the case of a
class-based component -] lives in an object called `this.state`.

Simply put, if you’d like your app to **do** anything – if you want interactivity,
adding and deleting things, logging in and out – that will involve state.

# Rule of thumb for what to store as state

... it’s common to put responses from the server into state... you wouldn’t want to
duplicate hard-coded values on both the server and client. What if the server changed
its calibration? What if the user installed a 200A power system? And so on.

So: while state is generally reserved for things that change, it’s also a good place to
put “volatile” information like data that came from a server call.

# How To Change State

If anything in the state changes, ... React ... **re-renders** the entire app.

React knows when state has changed because _you tell it explicitly_...

# Quick review [for a class-based component]:

- React maintains state as an object

- You can change that object by calling `setState`

- React will re-render every time you call `setState`

# Practical considerations for more complex apps

In this [app] ... state is a single object that describes the entire app – but in
practice, it is broken down into smaller pieces. The best way to do this is to keep
state in the “container” components, and keep it out of the “presentational” ones.

If you are using Redux, you actually _will_ have one big state object that describes
the entire app. That’s basically what Redux does: one huge object represents the app’s
state, and then reducers and `mapStateToProps` carve it up into pieces relevant to each
component.
