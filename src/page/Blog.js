import React, { Component } from 'react';
import '../css/Blog.css'
import AOS from 'aos'
import laptop from '../image/laptop.jpg'
import face1 from "../image/face1.jpeg"
import face2 from "../image/face2.jpeg"
import face3 from "../image/face3.jpeg"
class Blog extends Component {
    componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }
    render() {
        return (
            <>
               <div class='blogPage bg-light'>
                <div class='container'>
                    <div class='row py-5'>
                        <div class='col-lg-7'>
                        <div class=''>
                        <h1>#1. Bootstrap 5</h1>
                        <p class='text-muted py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
                        <p class='text-muted py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
                        </div>
                        <div class=''>
                            <img src={laptop} class='img-fluid'></img>
                        </div>
                        <div class=''>
                        <h1>#2. Creative React Themes</h1>
                        <p class='text-muted py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
                        <p class='text-muted py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
                        </div>

                        <div>
                            <ul  class='buttonDiv'>
                                <li><button>Design</button></li>
                                <li><button>HTML5</button></li>
                                <li><button>CSS3</button></li>
                                <li><button>Bootstrap5</button></li>

                            </ul>
                        </div>
                        <div class='mt-5 pt-5'>
                        <h1 class='mt-5'>5 Comments</h1>
                        </div>
                        <div class="media mt-4 pl-5 py-5">
                            <img class="mr-3 rounded-circle" src={face1} style={{height: '80px',width: '80px'}}/>
                            <div class="media-body">
                                <h5 class="mt-0">George Washington</h5>
                                <p class='text-muted'>
                                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!
                                </p>
                            </div>
                        </div>

                        <div class="media mt-5  py-5 commentReply">
                            <img class="mr-3 rounded-circle" src={face2} style={{height: '70px',width: '70px'}}/>
                            <div class="media-body">
                                <h5 class="mt-0">George Washington</h5>
                                <p class='text-muted'>
                                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!
                                </p>
                                <button>REPLY</button>
                            </div>
                        </div>

                        <div class="media mt-5  py-5 commentReply">
                            <img class="mr-3 rounded-circle" src={face1} style={{height: '70px',width: '70px'}}/>
                            <div class="media-body">
                                <h5 class="mt-0">George Washington</h5>
                                <p class='text-muted'>
                                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!
                                </p>
                                <button>REPLY</button>
                            </div>
                        </div>

                        <div class="media mt-5  py-5 commentReply">
                            <img class="mr-3 rounded-circle" src={face2} style={{height: '70px',width: '70px'}}/>
                            <div class="media-body">
                                <h5 class="mt-0">George Washington</h5>
                                <p class='text-muted'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, 
                                        autem necessitatibus
                                        voluptate quod mollitia delectus aut, sunt placeat nam vero culpa
                                        sapiente consectetur similique,
                                        inventore eos fugit cupiditate numquam!
                                </p>
                                <button>REPLY</button>
                            </div>
                        </div>

                        <div class="media mt-5  py-5 commentReply">
                            <img class="mr-3 rounded-circle" src={face3} style={{height: '70px',width: '70px'}}/>
                            <div class="media-body">
                                <h5 class="mt-0">Alexandra Alyssa</h5>
                                <p class='text-muted'>
                                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, 
                                     autem necessitatibus
                                      voluptate quod mollitia delectus aut, sunt placeat nam vero culpa
                                       sapiente consectetur similique,
                                       inventore eos fugit cupiditate numquam!
                                </p>
                                <button>REPLY</button>
                            </div>
                        </div>

                        <div class='commentPost bg-white p-5'>
                        <form>
                        <div class="form-row">
                            <div class="col">
                            <label class='label font-weight-bold'  style={{fontSize: '13px'}}>NAME*</label>
                            <input type="text" class="form-control"/>
                            </div>
                            <div class="col">
                            <label class='label font-weight-bold' style={{fontSize: '13px'}}>EMAIL*</label>
                            <input type="email" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-row mt-3">
                            <div class="col">
                            <label class='label font-weight-bold'  style={{fontSize: '13px'}}>WEBSITE</label>
                            <input type="text" class="form-control"/>
                            </div>
                            
                        </div>

                        <div class="form-row mt-3">
                            <div class="col">
                            <label class='label font-weight-bold' style={{fontSize: '13px'}}>MESSAGE</label>
                            <textarea class="" rows="6"></textarea>
                            </div>
                            
                        </div>

                        <div class="form-row mt-3">
                          <button>POST A COMMENT</button>
                            
                        </div>

                        </form>
                        </div>

                        </div>
                        <div class='col-lg-5 px-5'>
                        <div class='searchDiv '>
                            <input type='text' placeholder='Search'/>
                            <span class='search'><i class='fa fa-search'></i></span>

                        </div>
                        <h3 class='mt-5'>What I Do?</h3>

                        <div class='row whatIDo py-2'>
                            <div class='col-lg-6'>
                                <ul class='whatIDo_ul text-muted'>                                  
                                    <li>Web Design</li>
                                    <li>Web Development</li>
                                    <li>App Development</li>
                                    <li>Graphic Design</li>

                                </ul>
                            </div>
                            <div class='col-lg-6'>
                                <ul class='whatIDo_ul text-muted'>                                  
                                    <li>Marketing</li>
                                    <li>IT Farm</li>
                                    <li>Visual Editor</li>
                                    <li>Web Design</li>

                                </ul>
                            </div>
                            <div class="media  mt-3 py-2 commentReply">
                            <img class="mr-3" src={face1} style={{height: '70px',width: '70px'}}/>
                            <div class="media-body">
                                <h5 class="mt-0">George Washington</h5>
                                <i class="fa fa-calendar text-muted" aria-hidden="true"><span> June 1,2021</span></i>
                                <i class="fa fa-user text-muted px-2" aria-hidden="true"><span> Admin</span></i>
                                
                                <div><i class="fa fa-comment mt-2 text-muted" aria-hidden="true"><span> 19</span></i></div>
                                
                               
                             </div>
                             </div>

                             <div class="media  py-2 commentReply">
                            <img class="mr-3" src={face1} style={{height: '70px',width: '70px'}}/>
                            <div class="media-body">
                                <h5 class="mt-0">George Washington</h5>
                                <i class="fa fa-calendar text-muted" aria-hidden="true"><span> June 1,2021</span></i>
                                <i class="fa fa-user text-muted px-2" aria-hidden="true"><span> Admin</span></i>
                                
                                <div><i class="fa fa-comment mt-2 text-muted" aria-hidden="true"><span> 19</span></i></div>
                                
                               
                             </div>
                             </div>

                             <div class="media  py-2 commentReply">
                            <img class="mr-3" src={face1} style={{height: '70px',width: '70px'}}/>
                            <div class="media-body">
                                <h5 class="mt-0">George Washington</h5>
                                <i class="fa fa-calendar text-muted" aria-hidden="true"><span> June 1,2021</span></i>
                                <i class="fa fa-user text-muted px-2" aria-hidden="true"><span> Admin</span></i>
                                
                                <div><i class="fa fa-comment mt-2 text-muted" aria-hidden="true"><span> 19</span></i></div>
                                
                               
                             </div>
                             </div>
                             <ul  class='buttonDiv tag-cloud mt-3'>
                             <h2 class='mt-5'> Tag Cloud</h2>

                                <li><button>PHP</button></li>
                                <li><button>HTML5</button></li>
                                <li><button>CSS3</button></li>
                                <li><button>Bootstrap5</button></li>

                                <li><button>React Js</button></li>
                                <li><button>Vue js</button></li>
                                <li><button>Angular</button></li>
                                <li><button>Laravel</button></li>

                            </ul>
                            <div class='py-5'>
                                <h3 class='display-10'>Paragraph</h3>
                                <p class='text-muted py-4'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, 
                                     autem necessitatibus
                                      voluptate quod mollitia delectus aut, sunt placeat nam vero culpa
                                       sapiente consectetur similique,
                                       inventore eos fugit cupiditate numquam!
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div> 
               </div>
            </>
        );
    }
}

export default Blog;