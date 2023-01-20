import React from 'react'
import "./projects.scss";
function Projects() {
  return (
    <div className='project' id="project">
    	
		<div className='project-container'>
            <h2 className="project-container__title">Các dự án của tôi</h2>	
	
    		<div className="project-container-row-1">
    			<div className="project-container-row-1v">
							<p className='project-container-row-1v__info_1'>Note app là một ứng dụng mà bạn có thể ghi chú lại những việc muốn làm.</p>
							<img className='project-container-row-1v__img_1' src="assets/2023-01-06_184659.png" alt={"logo"}></img>
							<div className='project-container-row-1v__caption_1'>
								<div className='project-container-row-1v__blur'></div>
								<div className='project-container-row-1v__caption-text'><a href='https://notes-bs7t5m15k-mathnumber.vercel.app/'>Nhấn để xem thêm</a></div>
							</div>		
    			</div>
			</div>

				<div className="project-container-row-2">
  				<div className="project-container-row-2v">	
							<p className='project-container-row-2v__info_2'>Bộ chuyển đổi đơn vị cho phép bất kỳ người dùng chuyển đổi nhanh chóng giữa đơn vị đo lường.</p>
				  			<img className='project-container-row-2v__img_2' src="assets/2023-01-06_184805.png" alt={"logo"}></img>
							  <div className='project-container-row-2v__caption_2'>
								<div className='project-container-row-2v__blur'></div>
								<div className='project-container-row-2v__caption-text'><a href='https://mathnumber.github.io/Convert/'>Nhấn để xem thêm</a></div>
							</div>	
    					
    				</div>
					</div>
				<div className="project-container-row-3">		
				<div className="project-container-row-3v">	
							<p className='project-container-row-3v__info_3'>Nhân bản trang web của Macintosh, dự án này được thực hiện trong thời gian đầu tôi học HTML/CSS/JS.</p>
							<img className='project-container-row-3v__img_3' src="assets/2023-01-06_184841.png" alt={"logo"}></img>
							<div className='project-container-row-3v__caption_3'>
								<div className='project-container-row-3v__blur'></div>
								<div className='project-container-row-3v__caption-text'><a href='https://mathnumber.github.io/Macintosh/'>Nhấn để xem thêm</a></div>
							</div>								
	    					
    			</div>
				</div>
				<div className="project-container-row-4">
				<div className="project-container-row-4v">	
							<p className='project-container-row-4v__info_4'>Facebook cho phép người dùng đăng tải, chia sẻ những suy nghĩ, hình ảnh, video về cuộc sống của mình .</p>
							<img className='project-container-row-4v__img_4' src="assets/2023-01-06_191549.png" alt={"logo"}></img>	
							<div className='project-container-row-4v__caption_4'>
								<div className='project-container-row-4v__blur'></div>
								<div className='project-container-row-4v__caption-text'><a href="https://www.facebook.com/">Nhấn để xem thêm</a></div>
							</div>
				</div>									
    			</div>
    		</div>
			
    </div>
  )
}

export default Projects