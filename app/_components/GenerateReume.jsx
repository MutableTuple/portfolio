const generateResume = (userData, projects) => {
  const { username, age, school } = userData;

  let resumeContent = `
    <h1 style="text-align:center;">Resume of ${username}</h1>
    <h3>Personal Information</h3>
    <p><strong>Username:</strong> ${username}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>School:</strong> ${school}</p>
    <hr/>
    <h3>Projects</h3>
    `;

  projects.forEach((project) => {
    resumeContent += `
        <h4>${project.project_name}</h4>
        <p><strong>Description:</strong> ${project.project_desc}</p>
        <p><strong>Short Description:</strong> ${project.project_short_desc}</p>
        <p><strong>Created On:</strong> ${new Date(
          project.project_created_on
        ).toLocaleDateString()}</p>
        <p><strong>Link:</strong> <a href="${
          project.product_link
        }" target="_blank">${project.product_link}</a></p>
        <img src="${project.project_image}" alt="${
      project.project_name
    }" style="width: 100%; height: auto;"/>
        <hr/>
      `;
  });

  // Now, generate the Word document using docxtemplater or a similar library
  downloadWordDocument(resumeContent);
};

const downloadWordDocument = (content) => {
  const blob = new Blob([content], {
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Resume.docx";
  link.click();
};
