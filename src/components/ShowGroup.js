import React, { Component } from 'react'
import axios from 'axios'


class ShowGroup extends Component {

  state = {
    data: {
      name: 'Travellin Crew',
      description: 'something',
      imageURL: 'some-image.jpg',
      members: [],
      likes: [],
      comments: []
    }
  }

  componentDidMount(){
    try {
      this.getGroupData()
    } catch (error) {
      console.log(error)
    }
  }

  getGroupData = async () => {
    const res = await axios.get(`/api/groups/${this.props.match.params.id}`)

    this.setState({ data: res.data })
  }


  render() {
    return (
      <div>
        <section className='hero is-primary is-medium'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <h1 className='title'>
                {this.state.data.name}
              </h1>
            </div>
          </div>
        </section>
        <section>
          <br />
          <div className='columns is-vcentered'>
            <div className=' column notification is-info'>
              <h3 className='bd-notification is-half has-text-centered'>Description</h3>
              <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper magna a quam rutrum, vel rhoncus mauris consequat. Quisque non sollicitudin est. Vestibulum ultrices, odio ac consectetur vestibulum, quam nisl venenatis tortor, id placerat nibh libero dapibus lorem. Vestibulum pulvinar et quam ac mollis. Vestibulum vulputate dolor sit amet purus rutrum scelerisque. Fusce in neque scelerisque, euismod libero sed, malesuada massa. Etiam posuere convallis ex a rhoncus. Donec dignissim pharetra iaculis. Vivamus ut orci ante. Ut mi elit, iaculis ac convallis vel, sodales non dolor. Sed fermentum nisi at luctus tristique. Fusce mollis consectetur justo, id iaculis purus aliquam quis. Proin sagittis tempus risus, non porta dui tristique hendrerit. Proin nec felis id nulla cursus scelerisque.
              </div>
            </div>
            <div className='column notification is-danger'>
              <h3 className='bd-notification is-half has-text-centered'>Members</h3>
              <div>
                {this.state.data.members.map(member => (
                  <div key={member.user.id} style={{ display: 'inline-block' }}>
                    <figure className='image'>
                      <img style={{ width: '100px', height: '100px' } } src={member.user.profileImage} /> <br />{' '}
                      {member.user.name}
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }


}

export default ShowGroup