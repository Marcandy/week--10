* state manegement is the most difficult concept to efficiently direct in a complex application

* interpolation is on of the great things  good thing about react -- there is a specific place in react for jquery but not necessalary in angular


* super in the constructor is basically invoking  to give the new created component the properties of the parent component

* 'export default' simply means this the default data we exporting whenenever anything is importing from that file

* in jsx anything uou start a tag with uppercase you are mostlikely refering to a component

* any js that we need to do in jsx need tohappen in curly braces

* cosole 'dir' will give all the node in js

* in a component anything that you want to keep track of it in a
state

* component should share dat a through props

* keep in concept the main container and presentational component
.
*  handleChange(e) {
  this.setState({value: e.target.value})
    this.state.name = e.target.value // if you dont want to set the state automatically just set it equal to it but don't invoke setState
    Or you can user documentBygetElementBy id or name to get value directly
  }

  handleClick() {
  this.setState({
    name: this.state.name
  })

  }


Front dev res:
https://github.com/FrontendMasters/front-end-handbook-2017
