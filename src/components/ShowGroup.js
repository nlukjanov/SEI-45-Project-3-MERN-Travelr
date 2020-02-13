import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'


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

  showComments({ _id, user, text, createdAt, handleCommentDelete }) {
    return (
      <div key={_id} className='box'>
        <article className='media'>
          <div className='media-content'>
            <div className='content'>
              <strong>{user.username}</strong>{' '}
              <small>{moment(createdAt).format('MMM Do YYYY')}</small>
              <p>{text}</p>
            </div>
          </div>
          <div className='media-right'>
            <button onClick={handleCommentDelete} className='delete'></button>
          </div>
        </article>
      </div>
    )
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
          <div className='columns is-vcentered' style={{ marginTop: '100px' }}>
            <div className=' column notification is-warning'>
              <h3 className='bd-notification is-half has-text-centered'>Description</h3>
              <div>
                {this.state.data.description}
              </div>
            </div>
            <div className='column notification is-danger has-text-centered'>
              <h3 className='bd-notification is-half'>Members</h3>
              <div>
                {this.state.data.members.map(member => (
                  <div key={member.user.id} style={{ display: 'inline-block' }}>
                    <figure className='image'>
                      <img style={{ width: '100px', height: '100px', marginLeft: '10px' } } src={member.user.profileImage} /> <br />{' '}
                      {member.user.name}
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <div className='columm notification box'>
              {this.showComments}
            </div>
            <div>
              <div>

              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

}

export default ShowGroup