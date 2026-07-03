// ─── SPECIAL SENSES – FULL QUESTION BANK (89 QUESTIONS) ──────────────
const QUESTION_BANK = [
    // ─── ANATOMY (1–27) ──────────────────────────────────────────────────
    {
        id: 1,
        subject: 'Anatomy',
        text: 'Lateral squint (external strabismus) is caused by a lesion of which of the following?',
        options: ['Oculomotor nerve', 'Trochlear nerve', 'Abducens nerve', 'Optic nerve', 'Trigeminal nerve'],
        answer: 2,
        meta: 'Assessment – 2020',
        explanation: 'Lateral squint (external strabismus) is caused by paralysis of the lateral rectus muscle, which is innervated by the abducens nerve (CN VI). The unopposed action of the medial rectus (CN III) pulls the eye medially. Oculomotor nerve palsy causes "down and out" deviation. Trochlear nerve palsy causes vertical diplopia. Optic nerve affects vision, not eye position. Trigeminal nerve is sensory for the face.'
    },
    {
        id: 2,
        subject: 'Anatomy',
        text: 'Which of the following structures receives sympathetic supply from the superior cervical ganglion via the internal carotid plexus, accompanying the superior division of the oculomotor nerve?',
        options: ['Levator palpebrae superioris', 'Superior rectus muscle', 'Superior oblique muscle', 'Medial rectus muscle', 'Inferior rectus muscle'],
        answer: 0,
        meta: 'Assessment – 2019',
        explanation: 'The levator palpebrae superioris receives sympathetic innervation via the internal carotid plexus, which accompanies the superior division of the oculomotor nerve. This sympathetic supply is responsible for the smooth muscle component (superior tarsal muscle) that contributes to eyelid elevation. The extraocular muscles are innervated by somatic motor fibres from the oculomotor, trochlear, and abducens nerves.'
    },
    {
        id: 3,
        subject: 'Anatomy',
        text: 'Which of the following structures does NOT pass through the common tendinous ring (annulus of Zinn) and supplies superior oblique muscle?',
        options: ['Oculomotor nerve (superior division)', 'Oculomotor nerve (inferior division)', 'Abducens nerve', 'Nasociliary nerve', 'Trochlear nerve'],
        answer: 4,
        meta: 'Assessment – 2019',
        explanation: 'The trochlear nerve (CN IV) does NOT pass through the common tendinous ring (annulus of Zinn). It enters the orbit through the superior orbital fissure, outside the annulus of Zinn, and runs medially to supply the superior oblique muscle. The oculomotor nerve (both divisions), abducens nerve, and nasociliary nerve all pass through the annulus of Zinn.'
    },
    {
        id: 4,
        subject: 'Anatomy',
        text: 'What are the primary actions of the superior rectus muscle?',
        options: ['Elevation, adduction, intorsion', 'Elevation, abduction, extorsion', 'Depression, adduction, intorsion', 'Depression, abduction, extorsion', 'Elevation, adduction, extorsion'],
        answer: 0,
        meta: '',
        explanation: 'The superior rectus muscle has three primary actions: elevation (upward movement), adduction (moving the eye towards the nose), and intorsion (rotating the top of the eye medially). This follows the rule for rectus muscles: the superior rectus elevates, adducts, and intorts. The inferior rectus depresses, adducts, and extorts. The superior oblique depresses and intorts.'
    },
    {
        id: 5,
        subject: 'Anatomy',
        text: 'Which of the following correctly describes the primary actions of the superior oblique muscle?',
        options: ['Elevation and extorsion', 'Depression and intorsion', 'Depression and extorsion', 'Elevation and intorsion', 'Adduction and elevation'],
        answer: 1,
        meta: '',
        explanation: 'The superior oblique muscle depresses and intorts the eye. It also abducts the eye. The primary actions of the superior oblique are depression (pulling the eye downward) and intorsion (rotating the top of the eye medially). This is because the tendon of the superior oblique passes through the trochlea, changing its line of action. The inferior oblique elevates and extorts the eye.'
    },
    {
        id: 6,
        subject: 'Anatomy',
        text: 'Which of the following structures passes between the superior and inferior divisions of the oculomotor nerve in the orbit?',
        options: ['Lacrimal nerve', 'Nasociliary nerve', 'Optic nerve', 'Abducens nerve', 'Trochlear nerve'],
        answer: 1,
        meta: '',
        explanation: 'The nasociliary nerve (a branch of the ophthalmic division of CN V) passes between the superior and inferior divisions of the oculomotor nerve in the orbit. The oculomotor nerve divides into superior and inferior divisions after entering the orbit. The nasociliary nerve runs between them and then courses medially to supply the ciliary ganglion, cornea, and tip of the nose. The lacrimal nerve runs laterally, the optic nerve is medial, the abducens nerve is lateral, and the trochlear nerve is superior and medial.'
    },
    {
        id: 7,
        subject: 'Anatomy',
        text: 'Which of the following findings is most characteristic of an oculomotor nerve lesion?',
        options: ['Eye deviated upward and medially with constricted pupil', 'Eye deviated downward and outward with dilated pupil', 'Eye deviated inward with ptosis and miosis', 'Eye deviated outward with normal pupillary reaction only', 'Eye deviated downward with constricted pupil'],
        answer: 1,
        meta: 'Final – 2025',
        explanation: 'An oculomotor nerve lesion causes the eye to be deviated "down and out" (downward and lateral) because the superior oblique (CN IV) and lateral rectus (CN VI) are unopposed. The pupil is dilated (mydriasis) due to loss of parasympathetic innervation to the sphincter pupillae muscle. Ptosis (drooping eyelid) also occurs due to paralysis of levator palpebrae superioris. This is the classic "down and out" appearance with a fixed, dilated pupil.'
    },
    {
        id: 8,
        subject: 'Anatomy',
        text: 'Which of the following structures of the eye is NOT derived from neuroectoderm?',
        options: ['Retina', 'Optic nerve', 'Iris epithelium', 'Ciliary body epithelium', 'Cornea'],
        answer: 4,
        meta: 'Final – 2020 · Assessment – 2023/2024',
        explanation: 'The cornea is NOT derived from neuroectoderm. It develops from surface ectoderm (epithelium) and mesoderm (stroma and endothelium). The retina, optic nerve, iris epithelium, and ciliary body epithelium all develop from neuroectoderm (the optic vesicle). The lens develops from surface ectoderm. The cornea is a transparent structure composed of epithelium (surface ectoderm), stroma (mesoderm), and endothelium (neural crest/mesoderm).'
    },
    {
        id: 9,
        subject: 'Anatomy',
        text: 'Mydriasis (pupillary dilation) is most commonly caused by a lesion of which of the following?',
        options: ['Optic nerve', 'Trochlear nerve', 'Oculomotor nerve', 'Trigeminal nerve', 'Abducens nerve'],
        answer: 2,
        meta: 'Assessment – 2020',
        explanation: 'Mydriasis (pupillary dilation) is most commonly caused by a lesion of the oculomotor nerve (CN III). The oculomotor nerve carries parasympathetic fibres to the sphincter pupillae muscle (via the ciliary ganglion). Loss of this parasympathetic input causes unopposed sympathetic activity, leading to pupillary dilation. Horner syndrome causes miosis (constricted pupil), not mydriasis. The optic, trochlear, trigeminal, and abducens nerves do not directly control pupillary size.'
    },
    {
        id: 10,
        subject: 'Anatomy',
        text: 'Parasympathetic fibers to the ciliary ganglion are carried specifically by which of the following?',
        options: ['Nasociliary nerve', 'Short ciliary nerves', 'Nerve to inferior oblique', 'Long ciliary nerves', 'Optic nerve'],
        answer: 2,
        meta: 'Final – 2023/2024 · Assessment – 2020',
        explanation: 'Parasympathetic fibres to the ciliary ganglion are carried by the nerve to the inferior oblique, a branch of the oculomotor nerve (CN III). These preganglionic parasympathetic fibres synapse in the ciliary ganglion, and postganglionic fibres then travel via the short ciliary nerves to the sphincter pupillae and ciliary muscles. The nasociliary nerve carries sensory fibres, and the long ciliary nerves carry sympathetic and sensory fibres. The short ciliary nerves carry postganglionic fibres from the ciliary ganglion to the eye.'
    },
    {
        id: 11,
        subject: 'Anatomy',
        text: 'Which of the following best describes the visual field information carried by the optic tract?',
        options: ['Ipsilateral temporal retina and contralateral nasal retina', 'Ipsilateral nasal retina and contralateral temporal retina', 'Ipsilateral temporal visual field and contralateral nasal visual field', 'Ipsilateral nasal visual field and contralateral temporal visual field', 'Only contralateral temporal retina fibers'],
        answer: 0,
        meta: 'Assessment – 2025',
        explanation: 'The optic tract carries ipsilateral temporal retina and contralateral nasal retina fibres. The temporal retina receives information from the nasal visual field, and the nasal retina receives information from the temporal visual field. After the optic chiasm, the optic tract contains fibres from the ipsilateral temporal retina (nasal visual field) and the contralateral nasal retina (temporal visual field). This results in the optic tract carrying information from the contralateral visual field (i.e., the right optic tract carries information from the left visual field).'
    },
    {
        id: 12,
        subject: 'Anatomy',
        text: 'The pupillary light reflex is mediated at which of the following brain regions?',
        options: ['Superior colliculus', 'Lateral geniculate nucleus', 'Pretectal area', 'Primary visual cortex', 'Hypothalamus'],
        answer: 2,
        meta: '',
        explanation: 'The pupillary light reflex is mediated at the pretectal area (pretectal nucleus) in the midbrain. Light signals from the retina travel via the optic nerve, optic chiasm, and optic tract to the pretectal area. The pretectal nuclei then project bilaterally to the Edinger-Westphal nuclei, which send parasympathetic fibres (via the oculomotor nerve) to the sphincter pupillae muscles, causing pupillary constriction. The superior colliculus is involved in visual reflexes (orienting), the lateral geniculate nucleus is for visual processing, the primary visual cortex is for conscious vision, and the hypothalamus regulates autonomic functions.'
    },
    {
        id: 13,
        subject: 'Anatomy',
        text: 'Loss of accommodation is most likely due to a lesion of which of the following?',
        options: ['Optic nerve', 'Oculomotor nerve', 'Trochlear nerve', 'Abducens nerve', 'Trigeminal nerve'],
        answer: 1,
        meta: '',
        explanation: 'Loss of accommodation is most likely due to a lesion of the oculomotor nerve (CN III). Accommodation involves contraction of the ciliary muscle, which is innervated by parasympathetic fibres from the oculomotor nerve (via the ciliary ganglion). The ciliary muscle relaxes the suspensory ligaments of the lens, allowing the lens to become more convex (increased refractive power). Loss of accommodation (presbyopia) is normal with ageing, but acute loss suggests oculomotor nerve palsy. The optic nerve is for vision, the trochlear nerve supplies the superior oblique muscle, the abducens nerve supplies the lateral rectus, and the trigeminal nerve is sensory.'
    },
    {
        id: 14,
        subject: 'Anatomy',
        text: 'Which of the following conditions is most likely to cause mydriasis?',
        options: ['Lesion of the oculomotor nerve', 'Horner syndrome', 'Lesion of the cervical sympathetic chain', 'Amaurotic pupil', 'Argyll Robertson pupil'],
        answer: 0,
        meta: 'Assessment – 2025',
        explanation: 'Mydriasis (pupillary dilation) is most likely caused by a lesion of the oculomotor nerve (CN III). This results in loss of parasympathetic innervation to the sphincter pupillae, causing the pupil to dilate. Horner syndrome and lesion of the cervical sympathetic chain cause miosis (pupillary constriction). Amaurotic pupil is caused by optic nerve disease (afferent pupillary defect). Argyll Robertson pupil is characterised by miosis and light-near dissociation (accommodates but does not react to light), seen in neurosyphilis.'
    },
    {
        id: 15,
        subject: 'Anatomy',
        text: 'Which of the following is NOT a correct cause-and-effect relationship in the visual pathway?',
        options: ['Lesion of the right optic tract → Left homonymous hemianopia', 'Lesion of the optic chiasm → Bitemporal hemianopia', 'Lesion of the left optic nerve → Left monocular blindness', 'Lesion of the temporal optic radiation → Contralateral superior quadrantanopia', 'Lesion of the optic chiasm → Contralateral nasal hemianopia'],
        answer: 4,
        meta: 'Final – 2025',
        explanation: 'Lesion of the optic chiasm causes bitemporal hemianopia, not contralateral nasal hemianopia. The optic chiasm contains crossing fibres from the nasal retina (temporal visual field). A lesion here affects the temporal visual fields of both eyes (bitemporal hemianopia). Contralateral nasal hemianopia would occur with a lesion of the optic tract or radiation. The other options are correct: right optic tract → left homonymous hemianopia, left optic nerve → left monocular blindness, temporal optic radiation (Meyer\'s loop) → contralateral superior quadrantanopia.'
    },
    {
        id: 16,
        subject: 'Anatomy',
        text: 'The inner surface of the tympanic membrane is innervated by which of the following nerves?',
        options: ['Facial nerve', 'Vagus nerve', 'Glossopharyngeal nerve', 'Trigeminal nerve (mandibular division)', 'Trigeminal nerve (maxillary division)'],
        answer: 2,
        meta: 'Assessment – 2023/2024',
        explanation: 'The inner surface of the tympanic membrane (tympanic cavity side) is innervated by the glossopharyngeal nerve (CN IX) via the tympanic branch (Jacobson\'s nerve). The outer surface (ear canal side) is innervated by the auriculotemporal nerve (CN V3, mandibular division of trigeminal) and the vagus nerve (CN X) via the auricular branch. The facial nerve does not innervate the tympanic membrane. The glossopharyngeal nerve provides sensation to the middle ear, pharynx, and posterior third of the tongue.'
    },
    {
        id: 17,
        subject: 'Anatomy',
        text: 'The upper two-thirds of the lateral surface of the auricle is supplied by which of the following nerves?',
        options: ['Greater auricular nerve', 'Lesser occipital nerve', 'Auriculotemporal nerve', 'Facial nerve', 'Vagus nerve'],
        answer: 2,
        meta: '',
        explanation: 'The upper two-thirds of the lateral surface of the auricle is supplied by the auriculotemporal nerve (a branch of the mandibular division of the trigeminal nerve, CN V3). The lower one-third of the lateral surface is supplied by the greater auricular nerve (C2-C3). The lesser occipital nerve supplies the skin behind the ear. The facial nerve does not supply cutaneous sensation to the auricle. The vagus nerve supplies the concha and external auditory meatus via its auricular branch.'
    },
    {
        id: 18,
        subject: 'Anatomy',
        text: 'The stereocilia of hair cells in the macula are embedded in which of the following structures?',
        options: ['Cupula', 'Basilar membrane', 'Tectorial membrane', 'Otolithic membrane', 'Reissner\'s membrane'],
        answer: 3,
        meta: 'Assessment – 2020',
        explanation: 'The stereocilia of hair cells in the macula (utricle and saccule) are embedded in the otolithic membrane. The otolithic membrane is a gelatinous layer with embedded otoconia (calcium carbonate crystals) that increases its mass. When the head tilts, the otolithic membrane shifts, bending the stereocilia and depolarising the hair cells. The cupula is found in the crista ampullaris of the semicircular canals. The basilar membrane supports the organ of Corti in the cochlea. The tectorial membrane is in the organ of Corti, and Reissner\'s membrane separates the scala media from the scala vestibuli.'
    },
    {
        id: 19,
        subject: 'Anatomy',
        text: 'Perilymph is found in which of the following structures of the inner ear?',
        options: ['Scala media', 'Scala tympani', 'Organ of Corti', 'Semicircular ducts', 'Endolymphatic sac'],
        answer: 1,
        meta: 'Final – 2020',
        explanation: 'Perilymph is found in the scala tympani and scala vestibuli of the cochlea. It is also found in the vestibular perilymphatic spaces (around the membranous labyrinth). Perilymph is similar to extracellular fluid (high Na+, low K+). The scala media (cochlear duct) contains endolymph (high K+, low Na+), which is also found in the semicircular ducts and the endolymphatic sac. The organ of Corti is the sensory epithelium within the scala media and is bathed in endolymph (the hair cells are bathed in endolymph).'
    },
    {
        id: 20,
        subject: 'Anatomy',
        text: 'In the development of the human ear, which embryonic germ layer is responsible for forming the epithelial lining of the auditory (Eustachian) tube and the middle ear cavity?',
        options: ['Ectoderm', 'Endoderm', 'Mesoderm', 'Neural Crest', 'Neuroectoderm'],
        answer: 1,
        meta: 'Final – 2019',
        explanation: 'The epithelial lining of the auditory (Eustachian) tube and the middle ear cavity develops from the endoderm of the first pharyngeal pouch. The first pharyngeal pouch gives rise to the tubotympanic recess, which forms the middle ear cavity and the Eustachian tube. The ectoderm forms the external auditory meatus and the outer layer of the tympanic membrane. The mesoderm forms the ossicles and the fibrous layer of the tympanic membrane. The neural crest and neuroectoderm contribute to other structures, but not the epithelial lining of the middle ear.'
    },
    {
        id: 21,
        subject: 'Anatomy',
        text: 'The endoderm of the first pharyngeal pouch gives rise to which of the following structures?',
        options: ['Epithelium of the external auditory meatus and auricle', 'Fibrous layer of the tympanic membrane and ossicles', 'Endodermal lining of the tympanic membrane, tympanic cavity, and auditory (pharyngotympanic) tube', 'Cartilage of the auricle and stapedius muscle', 'Cochlea and vestibular apparatus'],
        answer: 2,
        meta: 'Final – 2019',
        explanation: 'The endoderm of the first pharyngeal pouch gives rise to the endodermal lining of the tympanic membrane (inner layer), the tympanic cavity (middle ear), and the auditory (pharyngotympanic) tube (Eustachian tube). This is the tubotympanic recess. The epithelium of the external auditory meatus and auricle develops from ectoderm (first pharyngeal cleft). The fibrous layer of the tympanic membrane and ossicles develop from mesoderm. The cartilage of the auricle develops from mesoderm of the first and second pharyngeal arches. The cochlea and vestibular apparatus develop from the otic vesicle (neuroectoderm).'
    },
    {
        id: 22,
        subject: 'Anatomy',
        text: 'Which structure is located within the epitympanic recess?',
        options: ['Handle of malleus', 'Long process of incus', 'Head of malleus', 'Stapes footplate', 'Tensor tympani tendon'],
        answer: 2,
        meta: 'Final – 2025',
        explanation: 'The head of the malleus is located within the epitympanic recess (attic). The epitympanic recess is the upper part of the middle ear cavity, above the tympanic membrane. It contains the head of the malleus and the body of the incus. The handle of the malleus is in the middle ear proper, attached to the tympanic membrane. The long process of the incus extends downward. The stapes footplate is in the oval window. The tensor tympani tendon attaches to the handle of the malleus.'
    },
    {
        id: 23,
        subject: 'Anatomy',
        text: 'Nystagmus is primarily a manifestation of which reflex?',
        options: ['Pupillary light reflex', 'Corneal reflex', 'Vestibulo-ocular reflex', 'Accommodation reflex', 'Ciliospinal reflex'],
        answer: 2,
        meta: 'Final – 2025',
        explanation: 'Nystagmus is primarily a manifestation of the vestibulo-ocular reflex (VOR). The VOR is a reflex that stabilises gaze during head movement by producing compensatory eye movements. Nystagmus is a rhythmic oscillation of the eyes that can be physiological (e.g., post-rotatory nystagmus) or pathological (e.g., vestibular or cerebellar lesions). The pupillary light reflex controls pupillary size. The corneal reflex is a blink reflex. The accommodation reflex adjusts the lens for near vision. The ciliospinal reflex causes pupillary dilation in response to pain.'
    },
    {
        id: 24,
        subject: 'Anatomy',
        text: 'Loss of taste sensation from the anterior two-thirds of the tongue indicates injury to which cranial nerve?',
        options: ['Glossopharyngeal nerve (CN IX)', 'Trigeminal nerve (CN V)', 'Hypoglossal nerve (CN XII)', 'Facial nerve (CN VII)', 'Vagus nerve (CN X)'],
        answer: 3,
        meta: '',
        explanation: 'Loss of taste sensation from the anterior two-thirds of the tongue indicates injury to the facial nerve (CN VII). The chorda tympani branch of the facial nerve carries taste fibres from the anterior two-thirds of the tongue to the nucleus solitarius. The glossopharyngeal nerve (CN IX) carries taste from the posterior one-third of the tongue. The trigeminal nerve carries general sensation (touch, pain, temperature) from the tongue. The hypoglossal nerve is motor to the tongue muscles. The vagus nerve carries taste from the epiglottis and pharynx.'
    },
    {
        id: 25,
        subject: 'Anatomy',
        text: 'Repeated attacks of the common cold may predispose to middle ear infection due to obstruction of which of the following structures?',
        options: ['External acoustic meatus', 'Cochlear aqueduct', 'Eustachian (pharyngotympanic) tube', 'Oval window', 'Round window'],
        answer: 2,
        meta: '',
        explanation: 'Repeated attacks of the common cold may predispose to middle ear infection (otitis media) due to obstruction of the Eustachian (pharyngotympanic) tube. The Eustachian tube connects the middle ear to the nasopharynx and allows pressure equalisation and drainage of middle ear secretions. During a cold, mucosal inflammation and oedema can block the Eustachian tube, preventing drainage and leading to fluid accumulation and infection (otitis media). The external acoustic meatus is the ear canal. The cochlear aqueduct connects the perilymphatic space to the subarachnoid space. The oval and round windows are membranes in the cochlea.'
    },
    {
        id: 26,
        subject: 'Anatomy',
        text: 'General and taste sensations from the epiglottis are transmitted to the nucleus solitarius through which of the following cranial nerves?',
        options: ['Glossopharyngeal nerve (CN IX)', 'Trigeminal nerve (CN V)', 'Facial nerve (CN VII)', 'Hypoglossal nerve (CN XII)', 'Vagus nerve (CN X)'],
        answer: 4,
        meta: '',
        explanation: 'General and taste sensations from the epiglottis are transmitted to the nucleus solitarius through the vagus nerve (CN X). The vagus nerve carries visceral sensory fibres from the epiglottis, larynx, and pharynx to the nucleus solitarius. The glossopharyngeal nerve (CN IX) carries taste from the posterior one-third of the tongue. The facial nerve (CN VII) carries taste from the anterior two-thirds of the tongue. The trigeminal nerve carries general sensation from the face and anterior tongue. The hypoglossal nerve is motor to the tongue.'
    },
    {
        id: 27,
        subject: 'Anatomy',
        text: 'Perilymph is found in which of the following structures of the cochlea?',
        options: ['Cochlear duct (scala media) only', 'Organ of Corti', 'Scala tympani', 'Tectorial membrane', 'Spiral limbus'],
        answer: 2,
        meta: 'Final – 2024',
        explanation: 'Perilymph is found in the scala tympani and the scala vestibuli of the cochlea. The scala tympani is the lower compartment of the cochlea, which contains perilymph. The cochlear duct (scala media) contains endolymph. The organ of Corti is the sensory epithelium located within the scala media and is bathed in endolymph. The tectorial membrane is part of the organ of Corti. The spiral limbus is a bony ridge that supports the tectorial membrane. Perilymph has a high Na+ and low K+ concentration (similar to extracellular fluid), while endolymph has a high K+ and low Na+ concentration.'
    },

    // ─── PHYSIOLOGY (28–47) ──────────────────────────────────────────────
    {
        id: 28,
        subject: 'Physiology',
        text: 'Which of the following statements about the human lens of the eye is TRUE?',
        options: ['Lens power is directly proportional to focal length', 'Lens power is inversely related to focal length', 'The lens is highly vascular', 'The lens is composed of keratinized epithelium', 'The lens is not innervated'],
        answer: 1,
        meta: 'Assessment – 2023/2024',
        explanation: 'Lens power is inversely related to focal length. The lens has a variable refractive power that is measured in dioptres (D), which is the inverse of the focal length in metres (D = 1/f). A shorter focal length means higher refractive power. The lens is avascular and relies on the aqueous humour for nutrition. It is composed of lens fibres (modified epithelium) that are not keratinized. The lens has no innervation.'
    },
    {
        id: 29,
        subject: 'Physiology',
        text: 'Accommodation for near vision in the eye is primarily mediated by which of the following parts?',
        options: ['Retina', 'Cornea', 'Ciliary muscles', 'Ciliary process', 'Optic nerve'],
        answer: 2,
        meta: 'Assessment – 2023/2024',
        explanation: 'Accommodation for near vision is primarily mediated by the ciliary muscles. When the ciliary muscles contract, they relax the suspensory ligaments (zonule fibres) of the lens, allowing the lens to become more convex and increase its refractive power. The retina detects light, the cornea provides most of the refractive power of the eye, the ciliary processes produce aqueous humour, and the optic nerve transmits visual signals. The ciliary muscles are innervated by parasympathetic fibres from the oculomotor nerve (CN III).'
    },
    {
        id: 30,
        subject: 'Physiology',
        text: 'Regarding simple regular myopic astigmatism, which of the following is TRUE?',
        options: ['All parallel rays focus behind the retina', 'One set of parallel rays focuses in front of the retina, while the other focuses on the retina', 'All parallel rays focus on the retina', 'One set of parallel rays focuses behind the retina, while the other focuses in front of the retina', 'All parallel rays focus in front of the retina'],
        answer: 1,
        meta: 'Assessment – 2025 · Assessment – 2023/2024',
        explanation: 'In simple regular myopic astigmatism, one set of parallel rays focuses in front of the retina (myopic component), while the other set focuses on the retina (emmetropic component). Astigmatism occurs when the cornea or lens has different curvatures in different meridians, causing light to focus at different points. In simple myopic astigmatism, one meridian is myopic (focuses in front of the retina) and the other is emmetropic (focuses on the retina). Simple hyperopic astigmatism has one meridian hyperopic (focuses behind the retina) and one emmetropic.'
    },
    {
        id: 31,
        subject: 'Physiology',
        text: 'Which of the following is a component of the near response of the eye?',
        options: ['Pupillary dilation', 'Divergence of visual axes', 'Convergence of visual axes', 'Relaxation of the lens', 'Decreased refractive power'],
        answer: 2,
        meta: '',
        explanation: 'The near response of the eye includes three components: convergence of visual axes, accommodation (increased lens curvature), and pupillary constriction (miosis). Convergence of visual axes ensures that the image falls on the fovea of both eyes for binocular single vision. Pupillary dilation and divergence of visual axes are components of the far response. Relaxation of the lens and decreased refractive power occur during far vision, not near vision. The near response is mediated by the parasympathetic nervous system via the oculomotor nerve.'
    },
    {
        id: 32,
        subject: 'Physiology',
        text: 'The parvocellular pathway of the visual system is primarily responsible for which of the following?',
        options: ['Motion detection', 'Color perception', 'Pupillary reflex', 'Depth perception only', 'Auditory-visual integration'],
        answer: 1,
        meta: '',
        explanation: 'The parvocellular pathway (P pathway) is primarily responsible for color perception, fine detail, and high spatial resolution. It originates from the midget ganglion cells in the retina, which receive input from a single cone and synapse in the parvocellular layers of the lateral geniculate nucleus. The magnocellular pathway (M pathway) is responsible for motion detection and low spatial resolution. The pupillary reflex is mediated by the pretectal area. Depth perception involves both pathways but is not the primary function of the parvocellular pathway.'
    },
    {
        id: 33,
        subject: 'Physiology',
        text: 'Which of the following best explains color vision according to the color theory?',
        options: ['Color is determined by stimulation frequency of rods only', 'Color is determined by inhibition of ganglion cells', 'Color is determined by frequency of stimulation of three types of cones', 'Color is determined by activity of bipolar cells only', 'Color is determined by pupil size variation'],
        answer: 2,
        meta: 'Assessment – 2025',
        explanation: 'Color vision is best explained by the trichromatic theory (Young-Helmholtz theory), which states that color is determined by the frequency of stimulation of three types of cones: short-wavelength (S, blue), medium-wavelength (M, green), and long-wavelength (L, red) cones. The brain interprets the relative stimulation of these three cone types to perceive different colors. Rods are not involved in color vision (they provide vision in low light). Ganglion cells and bipolar cells transmit signals but do not determine color. Pupil size variation does not affect color perception.'
    },
    {
        id: 34,
        subject: 'Physiology',
        text: 'The aqueous (water) layer of the tear film mainly functions to:',
        options: ['Prevent tear evaporation', 'Lubricate the eyelids only', 'Provide oxygen and nutrients to the cornea', 'Produce lysozyme only', 'Form the optical surface of the lens'],
        answer: 2,
        meta: 'Final – 2025',
        explanation: 'The aqueous (water) layer of the tear film mainly functions to provide oxygen and nutrients to the cornea. The tear film has three layers: the lipid layer (outermost) prevents tear evaporation, the aqueous layer (middle) provides oxygen and nutrients to the cornea and contains antimicrobial proteins (e.g., lysozyme), and the mucin layer (innermost) allows the tear film to spread evenly over the corneal surface and lubricates the eye. The tear film also forms the optical surface of the cornea, not the lens.'
    },
    {
        id: 35,
        subject: 'Physiology',
        text: 'Following the transmission of signals through the olfactory bulb and tract, to which anatomical region do the second-order neurons project directly without an initial relay in the thalamus?',
        options: ['Medial geniculate nucleus', 'Primary olfactory cortex', 'Postcentral gyrus', 'Posterior parietal cortex', 'Calcarine sulcus'],
        answer: 1,
        meta: 'Final – 2019',
        explanation: 'Second-order neurons from the olfactory bulb project directly to the primary olfactory cortex (piriform cortex, entorhinal cortex, and amygdala) without an initial relay in the thalamus. This is a unique feature of the olfactory system. All other sensory systems (vision, hearing, taste, and somatosensation) have a thalamic relay before reaching the cortex. The medial geniculate nucleus is the thalamic relay for hearing, the postcentral gyrus is the primary somatosensory cortex, the posterior parietal cortex is for spatial awareness, and the calcarine sulcus is the primary visual cortex.'
    },
    {
        id: 36,
        subject: 'Physiology',
        text: 'Which of the following is true about traveling theory?',
        options: ['Follows Weber Fechner law', 'Based on Place theory (Helmholtz theory)', 'Discriminate locality of sound', 'Discriminate sound frequency (pitch)', 'Discriminate time of sound arrival & intensity difference'],
        answer: 4,
        meta: 'Assessment – 2020',
        explanation: 'Traveling theory (or the volley theory) is related to sound localisation. It discriminates the time of sound arrival and intensity difference between the two ears. The traveling wave theory (Békésy) explains how the cochlea discriminates sound frequency (pitch) based on the place of maximal displacement of the basilar membrane. Place theory (Helmholtz) explains pitch discrimination based on the location of stimulation on the basilar membrane. The Weber-Fechner law relates stimulus intensity to sensation magnitude. Sound locality is determined by interaural time and intensity differences.'
    },
    {
        id: 37,
        subject: 'Physiology',
        text: 'The superior semicircular canal is primarily stimulated by which of the following head movements?',
        options: ['Rotation in the horizontal plane (shaking the head "no-no")', 'Linear acceleration in the vertical plane', 'Rotation in the vertical plane from shoulder to shoulder', 'Rotation in the anteroposterior plane (nodding the head "yes-yes")', 'Horizontal linear acceleration during forward movement'],
        answer: 3,
        meta: 'Final – 2019',
        explanation: 'The superior semicircular canal is primarily stimulated by rotation in the anteroposterior plane (nodding the head "yes-yes"). Each semicircular canal is sensitive to angular acceleration in a specific plane. The superior canal is oriented in the vertical plane and is stimulated by nodding (pitch) movements. The horizontal (lateral) canal is stimulated by shaking the head "no-no" (yaw). The posterior canal is stimulated by tilting the head from shoulder to shoulder. Linear acceleration is detected by the otolith organs (utricle and saccule), not the semicircular canals.'
    },
    {
        id: 38,
        subject: 'Physiology',
        text: 'Depolarization of cochlear hair cells occurs due to increased permeability to which of the following ions?',
        options: ['Potassium and chloride', 'Sodium and calcium', 'Chloride and bicarbonate', 'Potassium and magnesium', 'Sodium and chloride'],
        answer: 0,
        meta: 'Final – 2019',
        explanation: 'Depolarization of cochlear hair cells occurs due to increased permeability to potassium (K+) and chloride (Cl-). The endolymph in the scala media has a high K+ concentration (about 150 mM) and a positive potential (about +80 mV). When the stereocilia bend towards the kinocilium, mechanosensitive channels open, allowing K+ to enter the hair cell from the endolymph. The influx of K+ depolarises the hair cell, leading to the release of neurotransmitter (glutamate) at the afferent synapse. Ca2+ is involved in neurotransmitter release but is not the primary ion for depolarisation.'
    },
    {
        id: 39,
        subject: 'Physiology',
        text: 'Which of the following is responsible for the magnification of sound waves in the middle ear?',
        options: ['Vibration of the round window membrane', 'Lever action of the auditory ossicles and the larger area of the tympanic membrane compared with the oval window', 'Contraction of the stapedius muscle alone', 'Movement of endolymph within the cochlea', 'Equalization of pressure by the Eustachian tube'],
        answer: 1,
        meta: 'Final – 2019',
        explanation: 'The magnification of sound waves in the middle ear is achieved by two mechanisms: (1) the lever action of the auditory ossicles (malleus, incus, and stapes) which amplifies the force, and (2) the larger area of the tympanic membrane compared with the oval window, which concentrates the sound energy onto a smaller area. This results in a pressure gain of about 22–30 times. Contraction of the stapedius muscle protects the inner ear from loud sounds (acoustic reflex). Movement of endolymph within the cochlea is part of the hearing process but does not magnify sound. Equalization of pressure by the Eustachian tube prevents damage but does not amplify sound.'
    },
    {
        id: 40,
        subject: 'Physiology',
        text: 'A positive Rinne test indicates that:',
        options: ['Bone conduction is better than air conduction', 'Air conduction is better than bone conduction', 'Bone and air conduction are equal', 'There is complete hearing loss', 'Sensorineural hearing loss is excluded'],
        answer: 1,
        meta: '',
        explanation: 'A positive Rinne test indicates that air conduction is better than bone conduction. In the Rinne test, a tuning fork is placed on the mastoid process (bone conduction) and then near the ear canal (air conduction). Normally, air conduction is louder and longer than bone conduction (positive Rinne test). In conductive hearing loss, bone conduction is louder than air conduction (negative Rinne test). In sensorineural hearing loss, both air and bone conduction are reduced, but air conduction is still better than bone conduction (positive Rinne test). A positive Rinne test does not exclude sensorineural hearing loss.'
    },
    {
        id: 41,
        subject: 'Physiology',
        text: 'The cochlear microphonic potential is primarily produced because:',
        options: ['Na+ influx depolarizes inner hair cells', 'Ca2+ efflux hyperpolarizes outer hair cells', 'K+ efflux makes the membrane potential more negative than -70 mV', 'K+ influx makes the membrane potential less negative than -70 mV', 'Cl- influx causes hair cell hyperpolarization'],
        answer: 3,
        meta: 'Final – 2025',
        explanation: 'The cochlear microphonic potential is primarily produced because K+ influx makes the membrane potential less negative than -70 mV (depolarisation). The cochlear microphonic is a receptor potential generated by the outer hair cells in response to sound. When the stereocilia bend, mechanosensitive channels open, allowing K+ to enter the hair cells from the endolymph (which has a high K+ concentration). The influx of K+ depolarises the hair cells, producing a receptor potential that mirrors the waveform of the sound stimulus. Na+ and Ca2+ are not the primary ions for cochlear microphonic generation.'
    },
    {
        id: 42,
        subject: 'Physiology',
        text: 'Which of the following best describes how the cochlea detects loud sounds?',
        options: ['Activation of fewer hair cells', 'Decreased displacement of the basilar membrane', 'High increase in movement of the basilar membrane', 'Reduced endolymph production', 'Increased stiffness of the oval window'],
        answer: 2,
        meta: '',
        explanation: 'The cochlea detects loud sounds by a high increase in movement of the basilar membrane. Loud sounds produce greater displacement of the basilar membrane, which causes more bending of the stereocilia of hair cells, leading to increased neurotransmitter release and increased firing rate of the auditory nerve. This is a form of intensity coding (population coding and rate coding). Activation of fewer hair cells and decreased displacement of the basilar membrane would occur with softer sounds. Reduced endolymph production and increased stiffness of the oval window would not increase the detection of loud sounds.'
    },
    {
        id: 43,
        subject: 'Physiology',
        text: 'After rotation of the body, what is the characteristic change in muscle tone produced by the vestibulospinal reflex?',
        options: ['Decreased tone in extensors on the same side and increased tone in extensors on the opposite side', 'Increased tone in flexors on the same side and decreased tone in extensors on the opposite side', 'Increased tone in extensors on the same side and decreased tone in extensors on the opposite side', 'Increased tone in flexors on both sides', 'No significant change in muscle tone'],
        answer: 2,
        meta: 'Final – 2020',
        explanation: 'After rotation of the body, the vestibulospinal reflex produces increased tone in extensors on the same side as the direction of rotation and decreased tone in extensors on the opposite side. This is part of the postural adjustments that maintain balance during head and body movements. The vestibulospinal tract facilitates extensor muscles on the side of the body towards which the head is turned, helping to maintain upright posture. The medial vestibulospinal tract influences neck muscles, and the lateral vestibulospinal tract influences extensor muscles of the trunk and limbs.'
    },
    {
        id: 44,
        subject: 'Physiology',
        text: 'Nystagmus is primarily mediated by which of the following reflexes?',
        options: ['Vestibulospinal reflex', 'Vestibulo-ocular reflex', 'Pupillary light reflex', 'Corneal reflex', 'Acoustic reflex'],
        answer: 1,
        meta: 'Final – 2020',
        explanation: 'Nystagmus is primarily mediated by the vestibulo-ocular reflex (VOR). The VOR stabilises gaze during head movement by producing compensatory eye movements. Nystagmus is a rhythmic oscillation of the eyes that can be elicited by vestibular stimulation (e.g., rotation, caloric testing). The vestibulospinal reflex is involved in postural adjustments, the pupillary light reflex controls pupillary size, the corneal reflex is a blink reflex, and the acoustic reflex protects the inner ear from loud sounds. Nystagmus is a sign of vestibular dysfunction or cerebellar lesions.'
    },
    {
        id: 45,
        subject: 'Physiology',
        text: 'Which of the following occurs during the acoustic reflex?',
        options: ['The tympanic membrane becomes lax to increase sound transmission', 'The rigidity of the ossicular chain increases, reducing the transmission of loud sounds to the inner ear', 'The mobility of the stapes increases to amplify loud sounds', 'The ossicular chain becomes more compliant, enhancing vibration', 'The acoustic reflex primarily improves hearing sensitivity to faint sounds'],
        answer: 1,
        meta: '',
        explanation: 'During the acoustic reflex, the rigidity of the ossicular chain increases, reducing the transmission of loud sounds to the inner ear. This is a protective mechanism mediated by the stapedius muscle (CN VII) and tensor tympani muscle (CN V3). Contraction of the stapedius muscle stiffens the ossicular chain, attenuating the sound energy reaching the cochlea and preventing damage to the inner ear. The acoustic reflex is triggered by loud sounds (above ~80 dB). The tympanic membrane does not become lax, and the mobility of the stapes does not increase. The acoustic reflex reduces, not improves, hearing sensitivity.'
    },
    {
        id: 46,
        subject: 'Physiology',
        text: 'A high sound intensity is primarily encoded by which of the following?',
        options: ['Decreased frequency of impulse discharge in the cochlear nerve', 'Increased frequency of impulse discharge in the cochlear nerve', 'Activation of fewer cochlear nerve fibers', 'Decreased vibration of the basilar membrane', 'Reduced neurotransmitter release from inner hair cells'],
        answer: 1,
        meta: 'Final – 2024',
        explanation: 'A high sound intensity is primarily encoded by increased frequency of impulse discharge in the cochlear nerve. Loud sounds cause greater displacement of the basilar membrane, leading to more bending of hair cell stereocilia, increased neurotransmitter release, and increased firing rate of auditory nerve fibres. This is a form of frequency (rate) coding. Additionally, loud sounds recruit more auditory nerve fibres (population coding). Decreased firing rate, activation of fewer fibres, decreased basilar membrane vibration, and reduced neurotransmitter release would all be associated with quieter sounds.'
    },
    {
        id: 47,
        subject: 'Physiology',
        text: 'The crista ampullaris of the semicircular canals is stimulated when:',
        options: ['Stereocilia bend away from the kinocilium', 'The cupula remains stationary despite head rotation', 'Stereocilia bend toward the kinocilium', 'Endolymph movement ceases completely', 'Hair cells become hyperpolarized'],
        answer: 2,
        meta: '',
        explanation: 'The crista ampullaris of the semicircular canals is stimulated when the stereocilia bend toward the kinocilium. Bending toward the kinocilium causes depolarisation of the hair cell (excitation). Bending away from the kinocilium causes hyperpolarisation (inhibition). The cupula is the gelatinous structure in which the stereocilia are embedded. Head rotation causes endolymph movement, which deflects the cupula and bends the stereocilia. The semicircular canals detect angular acceleration; when stereocilia bend toward the kinocilium, the hair cell depolarises and increases the firing rate of the vestibular nerve.'
    },

    // ─── HISTOLOGY (48–55) ──────────────────────────────────────────────
    {
        id: 48,
        subject: 'Histology',
        text: 'Corneal transparency is mainly maintained by which of the following mechanisms?',
        options: ['Absence of nerve supply minimizing light scattering', 'Dense melanocyte distribution preventing light scattering', 'Avascularity and absence of lymphatic vessels minimizing light scattering', 'Keratinization of the corneal epithelium to increase refractive clarity', 'High pigmentation of stromal collagen fibers to reduce glare'],
        answer: 2,
        meta: 'Final – 2020 · Assessment – 2019 · Assessment – 2023/2024 · Assessment – 2025',
        explanation: 'Corneal transparency is mainly maintained by avascularity and the absence of lymphatic vessels, which minimises light scattering. The cornea is avascular and receives its nutrition from the aqueous humour and tear film. This lack of blood vessels reduces light scattering. Additionally, the regular arrangement of collagen fibres in the corneal stroma (arranged in a lattice) and the uniform refractive index of the corneal components contribute to transparency. The cornea has a rich nerve supply (CN V1), so absence of nerve supply is incorrect. Melanocytes and pigmentation would reduce transparency. Keratinisation would increase opacity.'
    },
    {
        id: 49,
        subject: 'Histology',
        text: 'The stereocilia of the macula are embedded in which of the following structures?',
        options: ['Basilar membrane', 'Tectorial membrane', 'Reissner\'s membrane', 'Otolithic membrane', 'Tympanic membrane'],
        answer: 3,
        meta: 'Assessment – 2023/2024',
        explanation: 'The stereocilia of the macula are embedded in the otolithic membrane. The macula is the sensory epithelium of the utricle and saccule, which detects linear acceleration and gravity. The stereocilia of the hair cells in the macula are embedded in a gelatinous otolithic membrane that contains otoconia (calcium carbonate crystals). When the head tilts, the otolithic membrane shifts, bending the stereocilia and depolarising the hair cells. The basilar membrane and tectorial membrane are in the cochlea. Reissner\'s membrane separates the scala media from the scala vestibuli. The tympanic membrane is the eardrum.'
    },
    {
        id: 50,
        subject: 'Histology',
        text: 'The anterior surface of the iris contains which of the following cell types?',
        options: ['Pigmented epithelial cells and photoreceptors', 'Melanocytes and fibroblasts', 'Covering epithelial cells', 'Chondrocytes and osteocytes', 'Smooth muscle cells only'],
        answer: 1,
        meta: 'Assessment – 2020',
        explanation: 'The anterior surface of the iris contains melanocytes and fibroblasts. The anterior border layer of the iris is composed of fibroblasts and melanocytes, which give the iris its colour. The iris also contains smooth muscle fibres (sphincter pupillae and dilator pupillae) but these are located deeper in the iris stroma, not on the anterior surface. Pigmented epithelial cells are found on the posterior surface of the iris (pigment epithelium). Photoreceptors are found in the retina. Chondrocytes are cartilage cells, and osteocytes are bone cells. Covering epithelial cells are not present on the iris surface.'
    },
    {
        id: 51,
        subject: 'Histology',
        text: 'What is the most characteristic optic disc finding indicating glaucoma?',
        options: ['Optic disc swelling (papilledema)', 'Retinal hemorrhages', 'Progressive optic disc cupping', 'Cotton wool spots', 'Drusen deposits'],
        answer: 2,
        meta: 'Assessment – 2019 · Assessment – 2020',
        explanation: 'The most characteristic optic disc finding indicating glaucoma is progressive optic disc cupping. In glaucoma, increased intraocular pressure damages the optic nerve head, leading to progressive excavation (cupping) of the optic disc. This is seen as an enlarged cup-to-disc ratio and notching of the neuroretinal rim. Optic disc swelling (papilledema) is seen in raised intracranial pressure. Retinal hemorrhages and cotton wool spots are seen in hypertensive or diabetic retinopathy. Drusen deposits are associated with age-related macular degeneration. Glaucoma is the leading cause of irreversible blindness worldwide.'
    },
    {
        id: 52,
        subject: 'Histology',
        text: 'Corneal transparency is mainly maintained by which of the following mechanisms?',
        options: ['Absence of nerve supply minimizing light scattering', 'Dense melanocyte distribution preventing light scattering', 'Regularity of collagen fibers in the cornea', 'Keratinization of the corneal epithelium to increase refractive clarity', 'High pigmentation of stromal collagen fibers to reduce glare'],
        answer: 2,
        meta: '',
        explanation: 'Corneal transparency is mainly maintained by the regularity of collagen fibres in the cornea. The corneal stroma is composed of collagen fibrils arranged in a highly regular and orderly lattice, which minimises light scattering and maintains transparency. The refractive index of the collagen fibrils and the ground substance are also matched. Avascularity contributes to transparency but the regular arrangement of collagen is the primary factor. The cornea has a rich nerve supply (CN V1), so absence of nerve supply is incorrect. Melanocytes and pigmentation would reduce transparency. Keratinisation would increase opacity.'
    },
    {
        id: 53,
        subject: 'Histology',
        text: 'Lateral inhibition of adjacent rods and cones in the retina is mediated by which of the following cells?',
        options: ['Bipolar cells', 'Ganglion cells', 'Amacrine cells', 'Horizontal cells', 'Müller cells'],
        answer: 3,
        meta: 'Assessment – 2019',
        explanation: 'Lateral inhibition of adjacent rods and cones in the retina is mediated by horizontal cells. Horizontal cells are interneurons in the outer plexiform layer that receive input from photoreceptors and provide inhibitory feedback to adjacent photoreceptors. This lateral inhibition enhances edge detection and contrast sensitivity. Bipolar cells transmit signals from photoreceptors to ganglion cells. Ganglion cells are the output neurons of the retina. Amacrine cells mediate lateral inhibition in the inner retina. Müller cells are glial cells that provide structural support.'
    },
    {
        id: 54,
        subject: 'Histology',
        text: 'Which of the following structures is found in the outer nuclear layer of the retina?',
        options: ['Axons of ganglion cells', 'Cell bodies (nuclei) of rods and cones', 'Synapses between bipolar and ganglion cells', 'Nerve fiber layer', 'Inner segments of photoreceptors'],
        answer: 1,
        meta: 'Assessment – 2025 · Assessment – 2019',
        explanation: 'The outer nuclear layer of the retina contains the cell bodies (nuclei) of rods and cones. The retina has three nuclear layers: the outer nuclear layer (cell bodies of photoreceptors), the inner nuclear layer (cell bodies of bipolar, horizontal, and amacrine cells), and the ganglion cell layer (cell bodies of ganglion cells). The axons of ganglion cells form the nerve fibre layer. Synapses between bipolar and ganglion cells are in the inner plexiform layer. The inner segments of photoreceptors are in the photoreceptor layer (between the outer nuclear layer and the retinal pigment epithelium).'
    },
    {
        id: 55,
        subject: 'Histology',
        text: 'Which of the following cell types is found on the anterior surface of the iris?',
        options: ['Rods and cones', 'Ganglion cells and bipolar cells', 'Melanocytes and fibroblasts', 'Keratinocytes and chondrocytes', 'Schwann cells and astrocytes'],
        answer: 2,
        meta: 'Final – 2023/2024',
        explanation: 'The anterior surface of the iris contains melanocytes and fibroblasts. The anterior border layer of the iris is composed of fibroblasts and melanocytes, which give the iris its colour. Rods and cones are photoreceptors in the retina. Ganglion cells and bipolar cells are retinal neurons. Keratinocytes are skin cells, and chondrocytes are cartilage cells. Schwann cells and astrocytes are glial cells. The iris does not contain photoreceptors, retinal neurons, or glial cells on its anterior surface.'
    },
    {
        id: 56,
        subject: 'Histology',
        text: 'The anterior border layer of the iris mainly contains:',
        options: ['Smooth muscle fibers only', 'Collagen fibers and elastic tissue only', 'Pigmented epithelial cells', 'Fibroblasts and melanocytes', 'Ciliary muscle fibers'],
        answer: 3,
        meta: 'Final – 2025',
        explanation: 'The anterior border layer of the iris mainly contains fibroblasts and melanocytes. This layer gives the iris its colour and texture. Smooth muscle fibers (sphincter pupillae and dilator pupillae) are located deeper in the iris stroma. Collagen fibers and elastic tissue are also present in the stroma but are not the main components of the anterior border layer. Pigmented epithelial cells are found on the posterior surface of the iris. Ciliary muscle fibers are part of the ciliary body, not the iris.'
    },
    {
        id: 57,
        subject: 'Histology',
        text: 'Which membrane is attached to the cilia of the macula?',
        options: ['Basilar membrane', 'Tectorial membrane', 'Reissner\'s membrane', 'Tympanic membrane', 'Otolithic membrane'],
        answer: 4,
        meta: 'Final – 2025',
        explanation: 'The otolithic membrane is attached to the cilia (stereocilia) of the hair cells in the macula. The macula is the sensory epithelium of the utricle and saccule. The stereocilia of the hair cells are embedded in the otolithic membrane, which is a gelatinous structure containing otoconia (calcium carbonate crystals). The basilar membrane and tectorial membrane are in the cochlea. Reissner\'s membrane separates the scala media from the scala vestibuli. The tympanic membrane is the eardrum.'
    },
    {
        id: 58,
        subject: 'Histology',
        text: 'In the vertebrate inner ear, the mechanosensitive hair bundle responsible for transducing mechanical sound or balance signals into electrical impulses is composed of which structures?',
        options: ['Microvilli and flagella', 'Kinocilium and stereocilia', 'Basal bodies and axonemes', 'Lamellipodia and filopodia', 'Otoliths and cupula'],
        answer: 1,
        meta: '',
        explanation: 'The mechanosensitive hair bundle in the inner ear is composed of a kinocilium and stereocilia. The hair bundle consists of one true cilium (kinocilium) and multiple stereocilia (microvilli). The stereocilia are arranged in rows of increasing height and are connected by tip links. Mechanical stimulation (sound or head movement) causes the stereocilia to bend, opening mechanosensitive channels. Microvilli and flagella are not characteristic of hair cells. Basal bodies and axonemes are parts of cilia but do not form the entire hair bundle. Lamellipodia and filopodia are found in migrating cells. Otoliths and cupula are extracellular structures (otolithic membrane and cupula).'
    },

    // ─── BIOCHEMISTRY (59–63) ──────────────────────────────────────────────
    {
        id: 59,
        subject: 'Biochemistry',
        text: 'Which of the following acts as both a hormone precursor and a visual pigment component?',
        options: ['Retinol', 'Retinal', 'Melatonin', 'Retinoic acid', 'β-Carotene'],
        answer: 0,
        meta: 'Assessment – 2023/2024',
        explanation: 'Retinol (vitamin A) acts as both a hormone precursor and a visual pigment component. Retinol is converted to retinal (11-cis retinal), which is the chromophore of visual pigments (rhodopsin in rods and photopsins in cones). Retinol can also be converted to retinoic acid, which functions as a hormone (regulating gene expression and cellular differentiation). Melatonin is a hormone but not a visual pigment component. Retinal is the visual pigment component but is not a hormone precursor. β-carotene is a precursor to retinol but does not itself function as a hormone or visual pigment.'
    },
    {
        id: 60,
        subject: 'Biochemistry',
        text: 'The non-protein component of rhodopsin is which of the following?',
        options: ['Retinol', 'All-trans retinal', '11-cis retinal', 'Retinol-binding protein', 'Photopsin'],
        answer: 2,
        meta: 'Final – 2020 · Assessment – 2023/2024',
        explanation: 'The non-protein component of rhodopsin is 11-cis retinal. Rhodopsin is a visual pigment composed of opsin (a protein) and 11-cis retinal (a chromophore). 11-cis retinal is bound to opsin via a Schiff base linkage. When light strikes rhodopsin, 11-cis retinal isomerises to all-trans retinal, which dissociates from opsin, initiating the visual phototransduction cascade. Retinol is the alcohol form of vitamin A. All-trans retinal is the isomer formed after light exposure. Retinol-binding protein transports retinol in the blood. Photopsin is the opsin protein found in cone photoreceptors.'
    },
    {
        id: 61,
        subject: 'Biochemistry',
        text: 'Which of the following is a key function of vitamin A in the body?',
        options: ['Collagen synthesis in connective tissue', 'Maintenance of epithelial integrity', 'Calcium absorption in the intestine', 'Hemoglobin formation', 'Thyroid hormone production'],
        answer: 1,
        meta: 'Assessment – 2020',
        explanation: 'A key function of vitamin A in the body is the maintenance of epithelial integrity. Vitamin A is essential for the differentiation and maintenance of epithelial tissues (skin, mucous membranes, cornea, respiratory epithelium). It regulates gene expression and cellular differentiation. Collagen synthesis is a function of vitamin C. Calcium absorption is a function of vitamin D. Hemoglobin formation requires iron and vitamin B12. Thyroid hormone production requires iodine. Vitamin A deficiency leads to keratinisation of epithelial tissues, causing xerophthalmia and increased susceptibility to infections.'
    },
    {
        id: 62,
        subject: 'Biochemistry',
        text: 'Vitamin A plays an essential role in which of the following physiological processes?',
        options: ['DNA replication and repair', 'Maintenance of epithelial integrity and regulation of protein synthesis', 'Glycogen breakdown in the liver', 'Neurotransmitter release at synapses', 'Formation of bile acids'],
        answer: 1,
        meta: 'Assessment – 2019',
        explanation: 'Vitamin A plays an essential role in the maintenance of epithelial integrity and the regulation of protein synthesis. Vitamin A (as retinoic acid) regulates gene expression through nuclear receptors (RAR and RXR), controlling the expression of genes involved in epithelial differentiation, growth, and development. DNA replication and repair are not directly vitamin A-dependent. Glycogen breakdown is regulated by glucagon and adrenaline. Neurotransmitter release is dependent on calcium and SNARE proteins. Bile acid formation is a function of cholesterol metabolism. Vitamin A deficiency causes squamous metaplasia and keratinisation of epithelial tissues.'
    },
    {
        id: 63,
        subject: 'Biochemistry',
        text: 'Which of the following is the correct relationship between β-carotene and retinol?',
        options: ['1 retinol → 2 β-carotene', 'β-carotene is the active form of vitamin A with no conversion needed', '2 β-carotene → 1 retinol', '1 β-carotene → 2 retinol', 'β-carotene is a protein carrier of retinol'],
        answer: 3,
        meta: 'Assessment – 2025',
        explanation: 'The correct relationship is 1 β-carotene → 2 retinol. β-carotene is a provitamin A carotenoid that can be cleaved in the intestine to yield two molecules of retinal, which can be reduced to retinol. This is why β-carotene is a dietary source of vitamin A. β-carotene itself is not the active form of vitamin A; it must be converted to retinol. The conversion requires 15,15′-β-carotene dioxygenase. Retinol is the active form of vitamin A. β-carotene is not a protein carrier of retinol; retinol-binding protein (RBP) is the carrier in the blood.'
    },
    {
        id: 64,
        subject: 'Biochemistry',
        text: 'Vitamin A toxicity during pregnancy is most strongly associated with which outcome?',
        options: ['Cataract formation', 'Neural tube defects only', 'Birth defects', 'Preterm labor', 'Gestational diabetes'],
        answer: 2,
        meta: 'Final – 2025',
        explanation: 'Vitamin A toxicity during pregnancy is most strongly associated with birth defects (teratogenicity). High doses of vitamin A (especially the synthetic form isotretinoin) during the first trimester can cause severe congenital malformations, including craniofacial, cardiac, and CNS abnormalities. The safe upper limit during pregnancy is 3,000–5,000 IU/day. Neural tube defects are associated with folate deficiency, not vitamin A toxicity. Cataract formation is not directly associated with vitamin A toxicity. Preterm labor and gestational diabetes are not primarily associated with vitamin A toxicity.'
    },

    // ─── PATHOLOGY (65–72) ──────────────────────────────────────────────
    {
        id: 65,
        subject: 'Pathology',
        text: 'Loss of central vision is most commonly associated with which of the following conditions?',
        options: ['Glaucoma', 'Retinal detachment', 'Macular degeneration', 'Cataract', 'Optic neuritis'],
        answer: 2,
        meta: 'Assessment – 2023/2024',
        explanation: 'Loss of central vision is most commonly associated with macular degeneration. The macula is responsible for central, high-resolution vision. Age-related macular degeneration (AMD) is the leading cause of central vision loss in the elderly. Glaucoma causes peripheral visual field loss (tunnel vision). Retinal detachment affects vision in the area of detachment. Cataract causes blurring and glare but typically does not cause isolated central vision loss. Optic neuritis causes vision loss that may be central or generalised.'
    },
    {
        id: 66,
        subject: 'Pathology',
        text: 'A female patient with Sjögren syndrome presents with dry eyes and irritation. Which of the following is the most likely diagnosis?',
        options: ['Bacterial conjunctivitis', 'Viral keratitis', 'Keratoconjunctivitis sicca', 'Uveitis', 'Acute glaucoma'],
        answer: 2,
        meta: 'Assessment – 2020',
        explanation: 'Keratoconjunctivitis sicca (dry eye syndrome) is the most likely diagnosis in a patient with Sjögren syndrome presenting with dry eyes and irritation. Sjögren syndrome is an autoimmune disease characterised by lymphocytic infiltration of exocrine glands, leading to dry eyes (keratoconjunctivitis sicca) and dry mouth (xerostomia). Bacterial conjunctivitis and viral keratitis are infections, not associated with Sjögren syndrome. Uveitis is inflammation of the uvea. Acute glaucoma presents with pain, redness, and elevated intraocular pressure.'
    },
    {
        id: 67,
        subject: 'Pathology',
        text: 'A woman with a history of hypertension and congestive heart failure presents with retinal findings of arteriolar narrowing, flame-shaped hemorrhages, and both soft and hard exudates. What is the most likely diagnosis?',
        options: ['Diabetic retinopathy', 'Hypertensive retinopathy', 'Atherosclerosis', 'Retinal detachment', 'Age-related macular degeneration'],
        answer: 1,
        meta: 'Assessment – 2019',
        explanation: 'The most likely diagnosis is hypertensive retinopathy. Hypertensive retinopathy is characterised by arteriolar narrowing (copper/silver wiring), flame-shaped haemorrhages, soft exudates (cotton wool spots), and hard exudates. These findings result from chronic hypertension causing damage to the retinal vasculature. Diabetic retinopathy is characterised by microaneurysms, dot and blot haemorrhages, and neovascularisation. Atherosclerosis is a systemic condition but does not cause the specific retinal findings described. Retinal detachment and age-related macular degeneration have different clinical presentations.'
    },
    {
        id: 68,
        subject: 'Pathology',
        text: 'Acute suppurative inflammation of a sebaceous gland of the eyelid is known as which of the following?',
        options: ['Chalazion', 'Stye', 'Blepharitis', 'Dacryocystitis', 'Conjunctivitis'],
        answer: 1,
        meta: 'Assessment – 2025',
        explanation: 'Acute suppurative inflammation of a sebaceous gland of the eyelid is known as a stye (hordeolum). A stye is an acute infection (usually Staphylococcus aureus) of a gland of Zeis (sebaceous gland) or a gland of Moll (sweat gland) at the eyelid margin. A chalazion is a chronic, non-suppurative granulomatous inflammation of a meibomian gland. Blepharitis is inflammation of the eyelid margins. Dacryocystitis is inflammation of the lacrimal sac. Conjunctivitis is inflammation of the conjunctiva. A stye presents as a red, painful lump at the eyelid margin.'
    },
    {
        id: 69,
        subject: 'Pathology',
        text: 'A Flexner–Wintersteiner rosette is classically associated with which of the following conditions?',
        options: ['Retinoblastoma', 'Glioblastoma', 'Medulloblastoma', 'Astrocytoma', 'Schwannoma'],
        answer: 0,
        meta: 'Assessment – 2025',
        explanation: 'A Flexner–Wintersteiner rosette is classically associated with retinoblastoma. Flexner–Wintersteiner rosettes are arrangements of tumour cells around a central lumen, representing attempts at photoreceptor differentiation. They are a characteristic histological feature of retinoblastoma, a malignant tumour of the retina that occurs in children. Homer-Wright rosettes are seen in medulloblastoma and neuroblastoma. Pseudorosettes are seen in ependymoma. Glioblastoma, astrocytoma, and schwannoma do not typically show Flexner–Wintersteiner rosettes.'
    },
    {
        id: 70,
        subject: 'Pathology',
        text: 'Corneal scarring is a characteristic complication of which condition?',
        options: ['Viral keratitis', 'Bacterial conjunctivitis', 'Trachoma caused by Chlamydia trachomatis', 'Allergic conjunctivitis', 'Fungal keratitis'],
        answer: 2,
        meta: 'Final – 2025',
        explanation: 'Corneal scarring is a characteristic complication of trachoma caused by Chlamydia trachomatis. Trachoma is a chronic follicular conjunctivitis that leads to corneal scarring, entropion, trichiasis, and blindness. It is a leading cause of preventable blindness worldwide. Viral keratitis (e.g., herpes simplex) can also cause corneal scarring, but trachoma is the classic association with scarring. Bacterial conjunctivitis and allergic conjunctivitis typically do not cause corneal scarring. Fungal keratitis can cause corneal scarring but is less common.'
    },
    {
        id: 71,
        subject: 'Pathology',
        text: 'A "white eye" (leukocoria) is classically associated with which condition?',
        options: ['Glaucoma', 'Retinoblastoma', 'Cataract', 'Uveitis', 'Retinal detachment'],
        answer: 1,
        meta: 'Final – 2025',
        explanation: 'A "white eye" (leukocoria) is classically associated with retinoblastoma. Leukocoria is a white pupillary reflex seen on fundoscopy, which is the most common presenting sign of retinoblastoma in children. Cataract can also cause leukocoria, but retinoblastoma is the classic association, especially in children. Glaucoma causes optic disc cupping, uveitis causes redness and pain, and retinal detachment can cause leukocoria but is less commonly associated with it than retinoblastoma. Retinoblastoma is the most common intraocular malignancy in children.'
    },
    {
        id: 72,
        subject: 'Pathology',
        text: 'Rapid deterioration of vision is most characteristic of which condition?',
        options: ['Cataract', 'Open-angle glaucoma', 'Macular degeneration', 'Optic neuritis', 'Diabetic retinopathy'],
        answer: 3,
        meta: 'Final – 2025',
        explanation: 'Rapid deterioration of vision is most characteristic of optic neuritis. Optic neuritis is an inflammatory demyelinating condition of the optic nerve that typically presents with acute or subacute vision loss over hours to days. Cataract and open-angle glaucoma cause gradual, progressive vision loss. Age-related macular degeneration causes gradual loss of central vision. Diabetic retinopathy can cause sudden vision loss due to haemorrhage, but optic neuritis is more classically associated with rapid deterioration, especially in young adults (often associated with multiple sclerosis).'
    },
    {
        id: 73,
        subject: 'Pathology',
        text: 'Which of the following does NOT cause conductive hearing loss?',
        options: ['Otitis media', 'Impacted ear wax', 'Otosclerosis', 'Tympanic membrane perforation', 'Acoustic neuroma'],
        answer: 4,
        meta: 'Final – 2025',
        explanation: 'Acoustic neuroma (vestibular schwannoma) does NOT cause conductive hearing loss. Acoustic neuroma is a tumour of the vestibulocochlear nerve (CN VIII) that causes sensorineural hearing loss, tinnitus, and balance problems. Conductive hearing loss is caused by problems in the external or middle ear that prevent sound from reaching the inner ear. Otitis media, impacted ear wax, otosclerosis (fixation of the stapes), and tympanic membrane perforation all cause conductive hearing loss by interfering with sound transmission through the external or middle ear.'
    },

    // ─── PHARMACOLOGY (74–77) ──────────────────────────────────────────────
    {
        id: 74,
        subject: 'Pharmacology',
        text: 'Which of the following drugs is used in the emergency management of acute angle-closure glaucoma?',
        options: ['Atropine', 'Pilocarpine', 'Scopolamine', 'Tropicamide', 'Phenylephrine'],
        answer: 1,
        meta: 'Assessment – 2025 · Assessment – 2019 · Assessment – 2023/2024',
        explanation: 'Pilocarpine is used in the emergency management of acute angle-closure glaucoma. Pilocarpine is a cholinergic agonist (muscarinic agonist) that causes constriction of the pupil (miosis), which pulls the iris away from the trabecular meshwork, opening the angle and reducing intraocular pressure. Atropine, scopolamine, and tropicamide are muscarinic antagonists (anticholinergics) that cause mydriasis and would worsen angle-closure glaucoma. Phenylephrine is an alpha-adrenergic agonist that causes mydriasis and would also worsen the condition.'
    },
    {
        id: 75,
        subject: 'Pharmacology',
        text: 'Which of the following topical drugs is preferred for treating chronic open-angle glaucoma in a patient with COPD?',
        options: ['Timolol', 'Dipivefrine', 'Apraclonidine', 'Phenylephrine', 'Acetazolamide'],
        answer: 2,
        meta: 'Final – 2020',
        explanation: 'Apraclonidine is preferred for treating chronic open-angle glaucoma in a patient with COPD. Apraclonidine is an alpha-2 adrenergic agonist that reduces aqueous production and lowers intraocular pressure without significant bronchoconstrictive effects. Timolol is a beta-blocker that is contraindicated in patients with COPD due to the risk of bronchospasm. Dipivefrine is a prodrug of epinephrine, which can cause tachycardia and is less commonly used. Phenylephrine is an alpha-agonist used for mydriasis, not glaucoma. Acetazolamide is a carbonic anhydrase inhibitor that can be used but is not topical and has systemic side effects.'
    },
    {
        id: 76,
        subject: 'Pharmacology',
        text: 'A 62-year-old man presents to the emergency room with severe ocular pain, redness, decreased vision, colored halos around lights, and nausea with vomiting. Ophthalmoscopy suggests an acute attack of glaucoma. Which of the following topical anti-glaucoma drugs is the drug of choice for emergency reduction of intraocular pressure?',
        options: ['Atropine', 'Timolol', 'Acetazolamide', 'Pilocarpine', 'Phenylephrine'],
        answer: 3,
        meta: 'Assessment – 2020',
        explanation: 'Pilocarpine is the drug of choice for emergency reduction of intraocular pressure in acute angle-closure glaucoma. Pilocarpine causes miosis, which opens the angle and reduces intraocular pressure. It is a cholinergic agonist that constricts the pupil and pulls the iris away from the trabecular meshwork. Timolol is a beta-blocker that reduces aqueous production but does not open the angle. Acetazolamide is a carbonic anhydrase inhibitor that reduces aqueous production but is systemic, not topical. Atropine and phenylephrine cause mydriasis and would worsen the condition. Pilocarpine is the first-line topical treatment for acute angle-closure glaucoma.'
    },
    {
        id: 77,
        subject: 'Pharmacology',
        text: 'In an open-angle glaucoma patient treated with topical timolol and apraclonidine, which of the following is the primary site of action responsible for lowering intraocular pressure?',
        options: ['Trabecular meshwork', 'Ciliary epithelium', 'Corneal epithelium', 'Iris sphincter muscle', 'Schlemm\'s canal'],
        answer: 1,
        meta: 'Final – 2023/2024',
        explanation: 'The primary site of action responsible for lowering intraocular pressure for both timolol and apraclonidine is the ciliary epithelium. Timolol (a beta-blocker) and apraclonidine (an alpha-2 agonist) both work by reducing the production of aqueous humour in the ciliary body (ciliary epithelium). They decrease aqueous production, thereby lowering intraocular pressure. The trabecular meshwork and Schlemm\'s canal are involved in aqueous drainage (outflow), which is the target of prostaglandin analogues (e.g., latanoprost) and miotics. The corneal epithelium and iris sphincter muscle are not the primary sites of action for these drugs.'
    },
    {
        id: 78,
        subject: 'Pharmacology',
        text: 'Overgrowth of eyelashes (hypertrichosis) is a known side effect of which medication?',
        options: ['Timolol', 'Acetazolamide', 'Atropine', 'Pilocarpine', 'Latanoprost'],
        answer: 4,
        meta: 'Final – 2025',
        explanation: 'Overgrowth of eyelashes (hypertrichosis) is a known side effect of latanoprost. Latanoprost is a prostaglandin analogue used to lower intraocular pressure in open-angle glaucoma. It increases uveoscleral outflow and can cause side effects such as increased pigmentation of the iris, periorbital fat atrophy, and hypertrichosis (increased growth of eyelashes). Timolol (beta-blocker), acetazolamide (carbonic anhydrase inhibitor), atropine (anticholinergic), and pilocarpine (cholinergic agonist) are not associated with eyelash overgrowth.'
    },

    // ─── MICROBIOLOGY (79–84) ──────────────────────────────────────────────
    {
        id: 79,
        subject: 'Microbiology',
        text: 'Which surface component of Staphylococcus aureus prevents phagocytosis by binding the Fc region of host immunoglobulin in an inverted orientation?',
        options: ['Polysaccharide capsule', 'Lipoteichoic acid', 'Protein A', 'Clumping factor A', 'Panton-Valentine Leukocidin'],
        answer: 2,
        meta: '',
        explanation: 'Protein A is the surface component of Staphylococcus aureus that prevents phagocytosis by binding the Fc region of host immunoglobulin (IgG) in an inverted orientation. Protein A binds to the Fc portion of IgG, preventing the antibody from binding to Fc receptors on phagocytes and blocking opsonisation. The polysaccharide capsule also inhibits phagocytosis but does not bind immunoglobulins. Lipoteichoic acid is involved in adherence, clumping factor A binds to fibrinogen, and Panton-Valentine Leukocidin (PVL) is a pore-forming toxin that causes leukocyte destruction.'
    },
    {
        id: 80,
        subject: 'Microbiology',
        text: 'Which of the following characteristics is true about a gram-negative oxidase-positive rods?',
        options: ['Has double stranded RNA', 'Exopigment on nutrient agar', 'Inhibited by optochin', 'Ferment mannitol', 'Has rigid cell wall & obligate intracellular'],
        answer: 1,
        meta: 'Assessment – 2020',
        explanation: 'A characteristic of gram-negative oxidase-positive rods is the production of exopigments on nutrient agar, as seen in Pseudomonas aeruginosa. Pseudomonas aeruginosa is a gram-negative, oxidase-positive rod that produces a blue-green pigment (pyocyanin) and a yellow-green pigment (pyoverdine) on nutrient agar. It also produces a fruity odour (grape-like). Double-stranded RNA is a feature of viruses. Optochin inhibition is a characteristic of Streptococcus pneumoniae. Mannitol fermentation is a characteristic of Staphylococcus aureus. A rigid cell wall and obligate intracellular growth are characteristic of Chlamydia, which is not oxidase-positive.'
    },
    {
        id: 81,
        subject: 'Microbiology',
        text: 'Pharyngoconjunctival fever is most commonly caused by which of the following?',
        options: ['Rhinovirus', 'Adenovirus', 'Herpes simplex virus', 'Epstein-Barr virus', 'Enterovirus'],
        answer: 1,
        meta: 'Final – 2025',
        explanation: 'Pharyngoconjunctival fever is most commonly caused by Adenovirus (specifically types 3, 4, and 7). It presents with fever, pharyngitis, conjunctivitis, and sometimes cervical lymphadenopathy. It is often associated with outbreaks in schools and camps. Rhinovirus causes the common cold. Herpes simplex virus causes cold sores and genital lesions. Epstein-Barr virus causes infectious mononucleosis. Enteroviruses can cause aseptic meningitis and hand-foot-and-mouth disease. Adenovirus is the classic cause of pharyngoconjunctival fever.'
    },
    {
        id: 82,
        subject: 'Microbiology',
        text: 'Necrotizing otitis media is most commonly caused by which organism?',
        options: ['Staphylococcus aureus', 'Streptococcus pneumoniae', 'Haemophilus influenzae', 'Pseudomonas aeruginosa', 'Moraxella catarrhalis'],
        answer: 3,
        meta: 'Final – 2025',
        explanation: 'Necrotizing (malignant) otitis media is most commonly caused by Pseudomonas aeruginosa. This is a severe, invasive infection of the external auditory canal and mastoid bone, typically seen in elderly diabetic patients or immunocompromised individuals. Pseudomonas aeruginosa is a gram-negative, oxidase-positive rod that produces exotoxins and is resistant to many antibiotics. Staphylococcus aureus, Streptococcus pneumoniae, Haemophilus influenzae, and Moraxella catarrhalis are common causes of acute otitis media but are not typically associated with necrotizing otitis media.'
    },
    {
        id: 83,
        subject: 'Microbiology',
        text: 'Pharyngoconjunctival fever, characterized by fever, pharyngitis, and conjunctivitis following exposure to inadequately chlorinated swimming pools, is most commonly caused by which of the following?',
        options: ['Enterovirus D68', 'Respiratory syncytial virus (RSV)', 'Human adenovirus', 'Human herpesvirus 6 (HHV-6)', 'Human metapneumovirus'],
        answer: 2,
        meta: 'Final – 2020',
        explanation: 'Pharyngoconjunctival fever following exposure to inadequately chlorinated swimming pools is most commonly caused by Human adenovirus (specifically types 3, 4, and 7). This is a classic presentation of adenoviral infection, which can spread through contaminated water. Enterovirus D68 causes respiratory illness and acute flaccid myelitis. RSV causes bronchiolitis in infants. HHV-6 causes roseola (exanthem subitum). Human metapneumovirus causes respiratory infections. Adenovirus is the classic cause of pharyngoconjunctival fever, often called "swimming pool conjunctivitis".'
    },
    {
        id: 84,
        subject: 'Microbiology',
        text: 'An oxidase-positive, Gram-negative bacillus is most likely which of the following?',
        options: ['Haemophilus influenzae', 'Moraxella catarrhalis', 'Pseudomonas aeruginosa', 'Chlamydia trachomatis', 'Streptococcus pneumoniae'],
        answer: 2,
        meta: 'Final – 2024',
        explanation: 'An oxidase-positive, Gram-negative bacillus is most likely Pseudomonas aeruginosa. Pseudomonas aeruginosa is a gram-negative, oxidase-positive rod. Haemophilus influenzae is a gram-negative bacillus but is oxidase-negative (or weakly positive). Moraxella catarrhalis is oxidase-positive but is a coccus, not a bacillus. Chlamydia trachomatis is an obligate intracellular organism, not a bacillus, and is not oxidase-positive. Streptococcus pneumoniae is a gram-positive coccus. Pseudomonas aeruginosa is the classic oxidase-positive gram-negative bacillus.'
    },
    {
        id: 85,
        subject: 'Microbiology',
        text: 'Which of the following organisms is a common cause of both neonatal conjunctivitis and otitis media?',
        options: ['Staphylococcus aureus', 'Chlamydia trachomatis', 'Moraxella catarrhalis', 'Pseudomonas aeruginosa', 'Corynebacterium diphtheriae'],
        answer: 1,
        meta: 'Assessment – 2019',
        explanation: 'Chlamydia trachomatis is a common cause of both neonatal conjunctivitis and otitis media. Chlamydia trachomatis is the most common cause of neonatal conjunctivitis (ophthalmia neonatorum) and can also cause otitis media in infants. Staphylococcus aureus can cause both but is less commonly associated with neonatal conjunctivitis than Chlamydia. Moraxella catarrhalis is a common cause of otitis media but not neonatal conjunctivitis. Pseudomonas aeruginosa can cause otitis media but is not a common cause of neonatal conjunctivitis. Corynebacterium diphtheriae causes diphtheria, not conjunctivitis or otitis media.'
    },

    // ─── CLINICAL (86–89) ──────────────────────────────────────────────
    {
        id: 86,
        subject: 'Clinical',
        text: 'Jaw claudication is a classic symptom of which of the following conditions?',
        options: ['Takayasu arteritis', 'Polyarteritis nodosa', 'Giant cell arteritis', 'Wegener granulomatosis', 'Systemic lupus erythematosus'],
        answer: 2,
        meta: 'Assessment – 2025',
        explanation: 'Jaw claudication is a classic symptom of giant cell arteritis (temporal arteritis). Jaw claudication is pain in the jaw with chewing due to ischaemia of the masseter muscles from arteritis of the facial or maxillary arteries. Giant cell arteritis is a vasculitis of large and medium-sized arteries, most commonly affecting the temporal artery. Other symptoms include headache, scalp tenderness, vision loss (due to anterior ischaemic optic neuropathy), and polymyalgia rheumatica. Takayasu arteritis affects the aorta and its branches, polyarteritis nodosa affects medium-sized arteries, Wegener granulomatosis affects the respiratory tract and kidneys, and SLE is a systemic autoimmune disease.'
    },
    {
        id: 87,
        subject: 'Clinical',
        text: 'Which of the following conditions is most commonly associated with Horner syndrome?',
        options: ['Middle ear infection', 'Diabetic retinopathy', 'Horner lung apex', 'Optic neuritis', 'Retinal detachment'],
        answer: 2,
        meta: '',
        explanation: 'Horner syndrome is most commonly associated with a Pancoast tumour (lung apex tumour), also known as "Horner lung apex". Horner syndrome consists of ptosis, miosis, anhidrosis, and enophthalmos, caused by interruption of the sympathetic pathway from the hypothalamus to the eye. A Pancoast tumour in the apex of the lung can invade the sympathetic chain at the level of T1, causing Horner syndrome. Middle ear infection can cause Horner syndrome if it affects the sympathetic plexus, but this is less common. Diabetic retinopathy, optic neuritis, and retinal detachment do not cause Horner syndrome.'
    },
    {
        id: 88,
        subject: 'Clinical',
        text: 'Miosis is a characteristic feature of which of the following conditions?',
        options: ['Oculomotor nerve palsy', 'Argyll Robertson pupil', 'Horner syndrome', 'Adie tonic pupil', 'Optic neuritis'],
        answer: 2,
        meta: 'Final – 2025',
        explanation: 'Miosis (pupillary constriction) is a characteristic feature of Horner syndrome. Horner syndrome is caused by interruption of the sympathetic pathway, leading to loss of sympathetic tone to the pupil, resulting in miosis. Oculomotor nerve palsy causes mydriasis (dilated pupil) and ptosis. Argyll Robertson pupil is characterised by miosis and light-near dissociation (accommodates but does not react to light), seen in neurosyphilis. Adie tonic pupil is a dilated pupil with slow accommodation. Optic neuritis is inflammation of the optic nerve and does not directly cause miosis.'
    },
    {
        id: 89,
        subject: 'Clinical',
        text: 'Otosclerosis is a disease primarily affecting which of the following structures?',
        options: ['External auditory canal', 'Tympanic membrane', 'Ossicles of the middle ear', 'Labyrinth of the inner ear', 'Cochlear nerve'],
        answer: 2,
        meta: 'Assessment – 2019',
        explanation: 'Otosclerosis is a disease primarily affecting the ossicles of the middle ear. Otosclerosis is a disorder of bone remodelling in which abnormal bone growth (otospongiosis) occurs in the otic capsule, most commonly fixing the stapes footplate in the oval window. This results in conductive hearing loss. The external auditory canal and tympanic membrane are not affected. The labyrinth of the inner ear can be involved in advanced cases (cochlear otosclerosis), but the primary site is the ossicles (specifically the stapes). The cochlear nerve is not affected by otosclerosis.'
    }
];

console.log('✅ Special Senses loaded successfully. Total questions:', QUESTION_BANK.length);