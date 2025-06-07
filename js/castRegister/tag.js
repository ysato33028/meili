const formData = new FormData(document.querySelector('form'));

const castData = {
  style: formData.get('style'),
  face: formData.get('face'),
  type: formData.get('type'),
  hairStyle: formData.get('hairStyle'),
  job: formData.get('job'),
  situation: formData.getAll('situation'), // ←複数OK
  skill: formData.getAll('skill')         // ←複数OK
};
