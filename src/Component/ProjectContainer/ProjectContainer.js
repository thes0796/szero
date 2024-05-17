import './ProjectContainer.css'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const ProjectContainer = ({ project }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <div className='project'>
      <h3>{project.name}</h3>
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={item + 'j'} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}
      <InfoOutlinedIcon onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {project.description}
          </Typography>
        </Box>
      </Modal>

    </div>
  )
}

export default ProjectContainer
