const allQuestionsData = [
{ "id": 1, "type": "tf", "q": "(True or False) Artificial Intelligence is a system designed to think exactly like a human mind.", "a": "false" },
{ "id": 2, "type": "tf", "q": "(True or False) The confidence score shows how strongly the AI believes in its prediction.", "a": "true" },
{ "id": 3, "type": "tf", "q": "(True or False) A false positive means allowing an unauthorized person.", "a": "true" },
{ "id": 4, "type": "tf", "q": "(True or False) Real-time systems require instant processing.", "a": "true" },
{ "id": 5, "type": "tf", "q": "(True or False) Image classification assigns one label to an image.", "a": "true" },
{ "id": 6, "type": "tf", "q": "(True or False) Traditional software always gives same output for same input.", "a": "true" },
{ "id": 7, "type": "tf", "q": "(True or False) Black Box Problem means AI is easy to explain.", "a": "false" },
{ "id": 8, "type": "tf", "q": "(True or False) AI learns patterns from data.", "a": "true" },

{ "id": 9, "type": "mcq", "q": "What is the main difference between AI and traditional software?", "opts": ["Uses electricity", "AI learns patterns", "Faster", "Always correct"], "a": "AI learns patterns" },
{ "id": 10, "type": "mcq", "q": "What does AI output?", "opts": ["Guaranteed answer", "Prediction with confidence", "Random", "Image name"], "a": "Prediction with confidence" },
{ "id": 11, "type": "mcq", "q": "Example of correlation?", "opts": ["Rain causes wet", "Fire causes smoke", "Ice cream & hot weather", "Switch lights"], "a": "Ice cream & hot weather" },
{ "id": 12, "type": "mcq", "q": "Confidence score 95% means?", "opts": ["Wrong", "Guaranteed", "95% sure", "No idea"], "a": "95% sure" },
{ "id": 13, "type": "mcq", "q": "AI for one task?", "opts": ["AGI", "ASI", "ANI", "All"], "a": "ANI" },
{ "id": 14, "type": "mcq", "q": "First step in AI workflow?", "opts": ["Prediction", "Data", "Model", "Output"], "a": "Data" },

{ "id": 15, "type": "essay", "q": "(Short Answer) Define Artificial Intelligence.", "a": "System that learns from data and makes predictions." },
{ "id": 16, "type": "essay", "q": "(Short Answer) Difference between AI and traditional program?", "a": "AI learns from data, traditional follows rules." },
{ "id": 17, "type": "essay", "q": "(Short Answer) Steps of AI process?", "a": "Input, Processing, Pattern Recognition, Prediction, Output." },
{ "id": 18, "type": "essay", "q": "(Short Answer) Define correlation.", "a": "Two things appear together but not cause." },
{ "id": 19, "type": "essay", "q": "(Short Answer) Example of correlation?", "a": "Ice cream and hot weather." },
{ "id": 20, "type": "essay", "q": "(Short Answer) What is confidence score?", "a": "Percentage of AI belief." },
{ "id": 21, "type": "essay", "q": "(Short Answer) Types of AI?", "a": "ANI, AGI, ASI." },
{ "id": 22, "type": "essay", "q": "(Short Answer) AI workflow components?", "a": "Data, Training, Model, Prediction." },
{ "id": 23, "type": "essay", "q": "(Short Answer) Define overfitting.", "a": "Model memorizes data and fails on new data." },
{ "id": 24, "type": "essay", "q": "(Short Answer) Define underfitting.", "a": "Model too simple to learn patterns." },
{ "id": 25, "type": "essay", "q": "(Short Answer) False positive vs false negative?", "a": "FP yes but no, FN no but yes." },
{ "id": 26, "type": "essay", "q": "(Short Answer) Validation data use?", "a": "Test model on new data." },
{ "id": 27, "type": "essay", "q": "(Short Answer) ML stages?", "a": "Training and Prediction." },
{ "id": 28, "type": "essay", "q": "(Short Answer) Black Box Problem?", "a": "Hard to explain AI decisions." },
{ "id": 29, "type": "essay", "q": "(Short Answer) Cause of underfitting?", "a": "Model too simple." },
{ "id": 30, "type": "essay", "q": "(Short Answer) Types of ML?", "a": "Supervised, Unsupervised, Reinforcement." },

{ "id": 31, "type": "essay", "q": "(Short Answer) Training vs Prediction?", "a": "Training learns, prediction uses learning." },
{ "id": 32, "type": "essay", "q": "(Short Answer) Error types?", "a": "False Positive, False Negative." },
{ "id": 33, "type": "essay", "q": "(Short Answer) Define latency.", "a": "Delay between input and output." },
{ "id": 34, "type": "essay", "q": "(Short Answer) Compare AI and traditional software.", "a": "AI learns, traditional fixed rules." },
{ "id": 35, "type": "essay", "q": "(Short Answer) Correlation vs causation?", "a": "Correlation together, causation direct cause." },
{ "id": 36, "type": "essay", "q": "(Short Answer) Automation vs intelligence?", "a": "Automation fixed, intelligence learns." },
{ "id": 37, "type": "essay", "q": "(Short Answer) Training vs inference?", "a": "Training learns, inference predicts." },
{ "id": 38, "type": "essay", "q": "(Short Answer) Overfitting vs underfitting?", "a": "Overfit memorizes, underfit too simple." },
{ "id": 39, "type": "essay", "q": "(Short Answer) False positive vs negative?", "a": "FP yes wrong, FN no wrong." },
{ "id": 40, "type": "essay", "q": "(Short Answer) Supervised vs unsupervised?", "a": "Supervised labeled, unsupervised unlabeled." },
{ "id": 41, "type": "essay", "q": "(Short Answer) ANI vs AGI?", "a": "ANI task-specific, AGI general." },

{ "id": 42, "type": "tf", "q": "(True or False) AI always gives correct answers.", "a": "false" },
{ "id": 43, "type": "tf", "q": "(True or False) Correlation means causation.", "a": "false" },
{ "id": 44, "type": "tf", "q": "(True or False) Overfitting is good for new data.", "a": "false" },
{ "id": 45, "type": "tf", "q": "(True or False) Underfitting means model is complex.", "a": "false" },

{ "id": 46, "type": "mcq", "q": "Which is ML type?", "opts": ["Supervised", "Manual", "Static", "None"], "a": "Supervised" },
{ "id": 47, "type": "mcq", "q": "Which is AI component?", "opts": ["Data", "Keyboard", "Mouse", "Screen"], "a": "Data" },
{ "id": 48, "type": "mcq", "q": "AI works mainly with?", "opts": ["Data", "Paper", "Ink", "Cable"], "a": "Data" },
{ "id": 49, "type": "mcq", "q": "Model uses data to?", "opts": ["Sleep", "Predict", "Delete", "Print"], "a": "Predict" },
{ "id": 50, "type": "mcq", "q": "AI learns from?", "opts": ["Rules only", "Data", "Nothing", "Luck"], "a": "Data" },


{ "id": 51, "type": "mcq", "q": "An AI model predicts “Dog: 51%, Cat: 49%.” Which statement is most accurate?", "opts": ["The AI is confused and malfunctioning", "The AI has almost no training data", "The AI is uncertain but selects the highest probability", "Both classes are equally correct"], "a": "The AI is uncertain but selects the highest probability" },

{ "id": 52, "type": "mcq", "q": "If a model achieves 100% accuracy on training data but performs poorly on new data, the most likely cause is:", "opts": ["Underfitting", "Overfitting", "Input corruption", "Threshold error"], "a": "Overfitting" },

{ "id": 53, "type": "mcq", "q": "Which failure originates at the Output stage?", "opts": ["Blurry input", "Wrong rotation", "Model limitation", "Confidence threshold issue"], "a": "Confidence threshold issue" },

{ "id": 54, "type": "mcq", "q": "If an AI fails in dim lighting, the main cause is:", "opts": ["Systemic training limitation", "Random error", "Threshold issue", "Loss function"], "a": "Systemic training limitation" },

{ "id": 55, "type": "mcq", "q": "What does loss represent?", "opts": ["Wrong predictions count", "Difference between predicted and actual", "Wrong probability", "Missing data"], "a": "Difference between predicted and actual" },

{ "id": 56, "type": "mcq", "q": "Lowering threshold increases:", "opts": ["False negatives", "Overfitting", "False positives", "Noise"], "a": "False positives" },

{ "id": 57, "type": "mcq", "q": "Failure with Scottish accent is:", "opts": ["Random", "Preprocessing", "Systemic", "Threshold"], "a": "Systemic" },

{ "id": 58, "type": "essay", "q": "(Short Answer) Why are early AI predictions unstable?", "a": "Because the model has weak initial parameters and little data so predictions fluctuate." },

{ "id": 59, "type": "essay", "q": "(Short Answer) Why does accuracy not reach 100%?", "a": "Because real data contains noise and variation." },

{ "id": 60, "type": "essay", "q": "(Short Answer) Failure in dim lighting belongs to which stage?", "a": "Input and Model stages." },

{ "id": 61, "type": "essay", "q": "(Short Answer) Effect of increasing threshold?", "a": "Decreases false positives and increases false negatives." },

{ "id": 62, "type": "essay", "q": "(Scientific Term) Ability to perform well on unseen data.", "a": "Generalization" },

{ "id": 63, "type": "essay", "q": "(Short Answer) Difference between minimizing and eliminating error?", "a": "Minimizing reduces error; eliminating is impossible due to noise." },

{ "id": 64, "type": "essay", "q": "(Short Answer) Why AI is probabilistic?", "a": "Because it outputs probabilities not fixed results." },

{ "id": 65, "type": "essay", "q": "(Scientific Term) Correct reference answer.", "a": "Ground Truth" },

{ "id": 66, "type": "essay", "q": "(Short Answer) Why AI errors are systemic?", "a": "Because the model repeats learned mistakes." },

{ "id": 67, "type": "essay", "q": "(Short Answer) Why more data may not improve performance?", "a": "Because data may be noisy or low quality." },

{ "id": 68, "type": "essay", "q": "(Short Answer) What is pattern-based prediction?", "a": "AI uses correlations and probabilities without understanding meaning." },

{ "id": 69, "type": "essay", "q": "(Short Answer) Automation vs AI?", "a": "Automation uses fixed rules; AI adapts with data." },

{ "id": 70, "type": "essay", "q": "(Short Answer) Difference between training and inference?", "a": "Training learns parameters; inference uses them." },

{ "id": 71, "type": "tf", "q": "(True or False) AI always gives certain answers.", "a": "false" },

{ "id": 72, "type": "tf", "q": "(True or False) Overfitting means memorizing data.", "a": "true" },

{ "id": 73, "type": "tf", "q": "(True or False) Validation checks unseen data.", "a": "true" },

{ "id": 74, "type": "tf", "q": "(True or False) Preprocessing is optional.", "a": "false" },

{ "id": 75, "type": "tf", "q": "(True or False) High threshold reduces false positives.", "a": "true" },

{ "id": 76, "type": "tf", "q": "(True or False) Clean input guarantees correct output.", "a": "false" },

{ "id": 77, "type": "tf", "q": "(True or False) False negative is more dangerous in medical cases.", "a": "true" },

{ "id": 78, "type": "tf", "q": "(True or False) AI understands meaning like humans.", "a": "false" },

{ "id": 79, "type": "tf", "q": "(True or False) Data drift affects performance.", "a": "true" },

{ "id": 80, "type": "tf", "q": "(True or False) AI errors can repeat consistently.", "a": "true" },

{ "id": 81, "type": "essay", "q": "(Short Answer) What is data drift?", "a": "Change between training and real-world data." },

{ "id": 82, "type": "essay", "q": "(Short Answer) Why “I don’t know” is useful?", "a": "It avoids incorrect risky decisions." },

{ "id": 83, "type": "essay", "q": "(Short Answer) Why confidence drops in new environment?", "a": "Because patterns differ from training data." },

{ "id": 84, "type": "essay", "q": "(Short Answer) Fix dim light failure?", "a": "Add training data and preprocessing." },

{ "id": 85, "type": "essay", "q": "(Short Answer) Why validation differs from real world?", "a": "Because data may not represent real conditions." },

{ "id": 86, "type": "essay", "q": "(Short Answer) Why zero training error is misleading?", "a": "It may indicate overfitting." },

{ "id": 87, "type": "essay", "q": "(Short Answer) Why lowering threshold increases false positives?", "a": "Because system becomes less strict." },

{ "id": 88, "type": "essay", "q": "(Short Answer) Spam filter error type when valid email blocked?", "a": "False Positive" },

{ "id": 89, "type": "essay", "q": "(Short Answer) Cancer classified healthy error?", "a": "False Negative" },

{ "id": 90, "type": "essay", "q": "(Short Answer) Outdoor failure stage?", "a": "Input and Model stage." },

{ "id": 91, "type": "essay", "q": "(Short Answer) Face unlock fails due to threshold stage?", "a": "Output stage." },

{ "id": 92, "type": "essay", "q": "(Short Answer) Cannot detect new color object cause?", "a": "Training limitation." },

{ "id": 93, "type": "essay", "q": "(Scientific Term) Smallest unit in image.", "a": "Pixel" },

{ "id": 94, "type": "essay", "q": "(Short Answer) What is pixel?", "a": "Smallest image unit with value." },

{ "id": 95, "type": "essay", "q": "(Short Answer) Pixel value 255 means?", "a": "White" },

{ "id": 96, "type": "essay", "q": "(Short Answer) RGB channels?", "a": "Red Green Blue" },

{ "id": 97, "type": "essay", "q": "(Short Answer) Image classification purpose?", "a": "Assign one label." },

{ "id": 98, "type": "essay", "q": "(Short Answer) Object detection difference?", "a": "Detects multiple objects with locations." },

{ "id": 99, "type": "essay", "q": "(Scientific Term) Rectangle around object.", "a": "Bounding Box" },

{ "id": 100, "type": "essay", "q": "(Short Answer) What is occlusion?", "a": "Object partially hidden." },

{ "id": 101, "type": "mcq", "q": "A system draws bounding boxes around faces but does not assign names. This task is:", "opts": ["Recognition", "Verification", "Detection", "Identification"], "a": "Detection" },

{ "id": 102, "type": "mcq", "q": "Which process compares one live face to one stored reference?", "opts": ["Identification", "Verification", "Clustering", "Classification"], "a": "Verification" },

{ "id": 103, "type": "mcq", "q": "Which process is computationally heavier?", "opts": ["1:1 matching", "1:N matching", "Detection only", "Grayscale"], "a": "1:N matching" },

{ "id": 104, "type": "mcq", "q": "High similarity between two different people indicates:", "opts": ["System broken", "Embeddings are close", "Threshold high", "Alignment failed"], "a": "Embeddings are close" },

{ "id": 105, "type": "mcq", "q": "If similarity is below threshold, result is:", "opts": ["Access Granted", "Access Denied", "Error", "Unknown"], "a": "Access Denied" },

{ "id": 106, "type": "mcq", "q": "False Positive is dangerous because:", "opts": ["Lowers convenience", "Reduces similarity", "Grants wrong access", "Increases computation"], "a": "Grants wrong access" },

{ "id": 107, "type": "mcq", "q": "Increasing threshold leads to:", "opts": ["More FP", "Less FN", "More FN", "Higher similarity"], "a": "More FN" },

{ "id": 108, "type": "mcq", "q": "Alignment is required because:", "opts": ["Reduce bias", "Ensure consistent face position", "Increase light", "Change threshold"], "a": "Ensure consistent face position" },

{ "id": 109, "type": "essay", "q": "(Short Answer) Why detection is easier than recognition?", "a": "Detection locates faces while recognition compares identities." },

{ "id": 110, "type": "essay", "q": "(Short Answer) Difference between verification and identification?", "a": "Verification is 1:1, identification is 1:N." },

{ "id": 111, "type": "essay", "q": "(Short Answer) Why similarity is numerical?", "a": "Because it measures distance between embeddings." },

{ "id": 112, "type": "essay", "q": "(Short Answer) Why twins have high similarity?", "a": "Because their embeddings are very close." },

{ "id": 113, "type": "essay", "q": "(Short Answer) Why similarity drops at night?", "a": "Lighting affects pixel values and embeddings." },

{ "id": 114, "type": "essay", "q": "(Short Answer) Best threshold range example?", "a": "Between known user and unknown similarity values." },

{ "id": 115, "type": "essay", "q": "(Short Answer) Why threshold is human decision?", "a": "Because it defines risk policy." },

{ "id": 116, "type": "essay", "q": "(Short Answer) High threshold causes what issue?", "a": "More false negatives." },

{ "id": 117, "type": "essay", "q": "(Short Answer) Low threshold causes what risk?", "a": "More false positives." },

{ "id": 118, "type": "essay", "q": "(Short Answer) Why cannot remove both FP and FN?", "a": "Because reducing one increases the other." },

{ "id": 119, "type": "essay", "q": "(Short Answer) Effect of threshold on security?", "a": "Higher threshold increases security." },

{ "id": 120, "type": "essay", "q": "(Short Answer) Outdoor failure pipeline stages?", "a": "Input, alignment, and model." },

{ "id": 121, "type": "tf", "q": "(True or False) Recognition is more complex than detection.", "a": "true" },

{ "id": 122, "type": "tf", "q": "(True or False) Verification compares many identities.", "a": "false" },

{ "id": 123, "type": "tf", "q": "(True or False) Similarity is visual judgment.", "a": "false" },

{ "id": 124, "type": "tf", "q": "(True or False) Threshold controls system decision.", "a": "true" },

{ "id": 125, "type": "tf", "q": "(True or False) Increasing threshold increases FP.", "a": "false" },

{ "id": 126, "type": "tf", "q": "(True or False) Alignment improves accuracy.", "a": "true" },

{ "id": 127, "type": "tf", "q": "(True or False) Embedding is raw image.", "a": "false" },

{ "id": 128, "type": "tf", "q": "(True or False) Lighting affects recognition.", "a": "true" },

{ "id": 129, "type": "tf", "q": "(True or False) FP is safer than FN in security.", "a": "false" },

{ "id": 130, "type": "tf", "q": "(True or False) Liveness detection prevents spoofing.", "a": "true" },

{ "id": 131, "type": "essay", "q": "(Short Answer) Effect of more identities?", "a": "Increases computation and collision risk." },

{ "id": 132, "type": "essay", "q": "(Short Answer) How to reduce spoofing?", "a": "Use liveness detection." },

{ "id": 133, "type": "essay", "q": "(Short Answer) Safe fallback behavior?", "a": "Use secondary authentication." },

{ "id": 134, "type": "essay", "q": "(Short Answer) Why detection and recognition separate?", "a": "Detection locates, recognition identifies." },

{ "id": 135, "type": "essay", "q": "(Short Answer) Effect of fewer training samples?", "a": "More false negatives." },

{ "id": 136, "type": "essay", "q": "(Short Answer) Role of alignment?", "a": "Standardizes face position." },

{ "id": 137, "type": "essay", "q": "(Short Answer) Why similarity is not proof?", "a": "It is probabilistic." },

{ "id": 138, "type": "essay", "q": "(Short Answer) Why embeddings needed?", "a": "To convert image into numeric vector." },

{ "id": 139, "type": "essay", "q": "(Short Answer) Lighting issue effect?", "a": "Reduces similarity scores." },

{ "id": 140, "type": "essay", "q": "(Short Answer) Evidence of bias?", "a": "Different error rates across groups." },

{ "id": 141, "type": "essay", "q": "(Short Answer) Threshold lowered effect?", "a": "More false positives." },

{ "id": 142, "type": "essay", "q": "(Short Answer) Printed image unlock issue?", "a": "False positive due to spoofing." },

{ "id": 143, "type": "essay", "q": "(Short Answer) Lighting reduces similarity stage?", "a": "Input stage." },

{ "id": 144, "type": "essay", "q": "(Short Answer) Test lighting vs alignment?", "a": "Control one variable at a time." },

{ "id": 145, "type": "essay", "q": "(Short Answer) Similar distributions meaning?", "a": "Weak separation between identities." },

{ "id": 146, "type": "mcq", "q": "Which task finds face location?", "opts": ["Recognition", "Detection", "Verification", "Identification"], "a": "Detection" },

{ "id": 147, "type": "mcq", "q": "What is embedding?", "opts": ["Image", "Numeric vector", "Box", "Score"], "a": "Numeric vector" },

{ "id": 148, "type": "mcq", "q": "AI output for image?", "opts": ["Guaranteed", "Prediction with confidence", "Random", "Name"], "a": "Prediction with confidence" },

{ "id": 149, "type": "mcq", "q": "Confidence score means?", "opts": ["Wrong", "Guaranteed", "AI certainty", "Unknown"], "a": "AI certainty" },

{ "id": 150, "type": "mcq", "q": "Purpose of liveness detection?", "opts": ["Increase speed", "Detect real vs fake", "Improve quality", "Change threshold"], "a": "Detect real vs fake" },

{ "id": 151, "type": "mcq", "q": "If latency increases, the most direct consequence is:", "opts": ["Higher precision", "Frame skipping", "Higher confidence", "Reduced complexity"], "a": "Frame skipping" },

{ "id": 152, "type": "mcq", "q": "Occlusion causes instability because:", "opts": ["Model deletes joints", "Model estimates missing landmarks probabilistically", "System stops", "Gesture resets"], "a": "Model estimates missing landmarks probabilistically" },

{ "id": 153, "type": "mcq", "q": "Raising gesture threshold leads to:", "opts": ["More false positives", "Lower false negatives", "Lower false positives but higher false negatives", "No change"], "a": "Lower false positives but higher false negatives" },

{ "id": 154, "type": "mcq", "q": "Pose estimation errors affect gesture recognition because:", "opts": ["Shared memory", "Depends on temporal stability", "Resolution issue", "Graph collapse"], "a": "Depends on temporal stability" },

{ "id": 155, "type": "mcq", "q": "Flickering keypoint indicates:", "opts": ["Wrong mapping", "Unstable feature extraction", "Threshold issue", "Buffer overflow"], "a": "Unstable feature extraction" },

{ "id": 156, "type": "mcq", "q": "Two people in frame causing failure is due to:", "opts": ["Averaging", "Tracking ambiguity", "Retraining", "Postprocessing"], "a": "Tracking ambiguity" },

{ "id": 157, "type": "mcq", "q": "Pose estimation is probabilistic because:", "opts": ["Stores templates", "Deterministic", "Estimates likelihoods", "Predicts identity"], "a": "Estimates likelihoods" },

{ "id": 158, "type": "mcq", "q": "AI waving detection actually works by:", "opts": ["Understanding intent", "Semantic meaning", "Detecting coordinate patterns", "Memorizing"], "a": "Detecting coordinate patterns" },

{ "id": 159, "type": "mcq", "q": "Dropped frame during gesture causes:", "opts": ["False positive", "False negative", "Higher confidence", "Better smoothing"], "a": "False negative" },

{ "id": 160, "type": "mcq", "q": "Lowering resolution improves stability because:", "opts": ["Better precision", "Less computation", "Better visibility", "Higher accuracy"], "a": "Less computation" },

{ "id": 161, "type": "tf", "q": "(True or False) Gesture recognition depends on time sequence.", "a": "true" },
{ "id": 162, "type": "tf", "q": "(True or False) Keypoint confidence guarantees correctness.", "a": "false" },
{ "id": 163, "type": "tf", "q": "(True or False) Occlusion increases uncertainty.", "a": "true" },
{ "id": 164, "type": "tf", "q": "(True or False) Latency improves performance.", "a": "false" },
{ "id": 165, "type": "tf", "q": "(True or False) Gesture detection uses temporal data.", "a": "true" },
{ "id": 166, "type": "tf", "q": "(True or False) Pose estimation identifies people.", "a": "false" },
{ "id": 167, "type": "tf", "q": "(True or False) Frame drops affect motion detection.", "a": "true" },
{ "id": 168, "type": "tf", "q": "(True or False) Higher threshold reduces false positives.", "a": "true" },
{ "id": 169, "type": "tf", "q": "(True or False) Environmental changes affect input first.", "a": "true" },
{ "id": 170, "type": "tf", "q": "(True or False) Smoothing removes all delay.", "a": "false" },

{ "id": 171, "type": "essay", "q": "(Short Answer) Difference between keypoint confidence and gesture confidence?", "a": "Keypoint is spatial accuracy, gesture is temporal pattern confidence." },

{ "id": 172, "type": "essay", "q": "(Short Answer) Effect of frame drops?", "a": "Breaks motion continuity and reduces accuracy." },

{ "id": 173, "type": "essay", "q": "(Short Answer) Responsiveness vs stability?", "a": "Responsiveness is fast but unstable, stability is smooth but slower." },

{ "id": 174, "type": "essay", "q": "(Short Answer) Why smoothing hides transitions?", "a": "It averages values and delays change detection." },

{ "id": 175, "type": "essay", "q": "(Short Answer) Causes of landmark jitter?", "a": "Lighting variation and weak feature extraction." },

{ "id": 176, "type": "essay", "q": "(Short Answer) Threshold effect on risk?", "a": "Higher reduces FP, increases FN." },

{ "id": 177, "type": "essay", "q": "(Short Answer) Why pose estimation doesn't understand body?", "a": "It only predicts coordinates, not meaning." },

{ "id": 178, "type": "essay", "q": "(Short Answer) How latency affects gestures?", "a": "Delays detection causing misclassification." },

{ "id": 179, "type": "essay", "q": "(Short Answer) Why occlusion increases uncertainty?", "a": "Missing pixel data affects prediction." },

{ "id": 180, "type": "essay", "q": "(Short Answer) Controlled experiment for environment?", "a": "Change one factor like lighting and compare results." },

{ "id": 181, "type": "essay", "q": "(Short Answer) Why pose estimation is probabilistic?", "a": "Due to ambiguous pixel input." },

{ "id": 182, "type": "essay", "q": "(Short Answer) Why test environment before deployment?", "a": "Because real conditions differ from training." },

{ "id": 183, "type": "essay", "q": "(Short Answer) Why high keypoint confidence not enough?", "a": "Gesture depends on time pattern too." },

{ "id": 184, "type": "essay", "q": "(Short Answer) Why gesture needs stability?", "a": "Because it analyzes motion over time." },

{ "id": 185, "type": "essay", "q": "(Short Answer) Resolution trade-off?", "a": "Lower improves speed but reduces precision." },

{ "id": 186, "type": "essay", "q": "(Short Answer) Fallback rule for low confidence?", "a": "Ask for confirmation." },

{ "id": 187, "type": "essay", "q": "(Short Answer) Outdoor failure stages?", "a": "Input and preprocessing." },

{ "id": 188, "type": "essay", "q": "(Short Answer) How instability causes danger?", "a": "Triggers wrong actions." },

{ "id": 189, "type": "essay", "q": "(Short Answer) Improve robustness?", "a": "More training data and smoothing." },

{ "id": 190, "type": "essay", "q": "(Short Answer) Threshold effect on safety?", "a": "Higher threshold increases safety." },

{ "id": 191, "type": "essay", "q": "(Short Answer) Gesture fails in side lighting stage?", "a": "Input stage." },

{ "id": 192, "type": "essay", "q": "(Short Answer) Stable keypoints but wrong activation?", "a": "Temporal logic issue." },

{ "id": 193, "type": "essay", "q": "(Short Answer) System slows over time cause?", "a": "Increased computational load." },

{ "id": 194, "type": "essay", "q": "(Short Answer) Hand outside frame issue?", "a": "Incomplete input data." },

{ "id": 195, "type": "essay", "q": "(Short Answer) Two people confusion cause?", "a": "Tracking ambiguity." },

{ "id": 196, "type": "essay", "q": "(Short Answer) Skeletal graph represents?", "a": "Connected coordinate structure." },

{ "id": 197, "type": "essay", "q": "(Short Answer) Reduce false positives?", "a": "Increase threshold or confirmation window." },

{ "id": 198, "type": "essay", "q": "(Short Answer) Why gestures differ each time?", "a": "Pixel variation affects prediction." },

{ "id": 199, "type": "essay", "q": "(Short Answer) Raise hand command technically?", "a": "Threshold-based activation of motion pattern." },

{ "id": 200, "type": "essay", "q": "(Short Answer) What to prioritize in high-risk systems?", "a": "High decision threshold." },

{ "id": 201, "type": "mcq", "q": "Speech recognition primarily converts audio into:", "opts": ["Meaning", "Graphs", "Numeric feature vectors", "Sentences"], "a": "Numeric feature vectors" },

{ "id": 202, "type": "mcq", "q": "Background noise affects first:", "opts": ["Threshold", "Feature extraction", "Output", "Intent"], "a": "Feature extraction" },

{ "id": 203, "type": "mcq", "q": "Different confidence scores for same command happen due to:", "opts": ["Instability", "Retraining", "Acoustic variation", "Threshold drift"], "a": "Acoustic variation" },

{ "id": 204, "type": "mcq", "q": "OCR errors increase with blur because:", "opts": ["Model forgets", "Pixel boundaries unclear", "Vocabulary shrinks", "Threshold rises"], "a": "Pixel boundaries unclear" },

{ "id": 205, "type": "mcq", "q": "False Positive in speech recognition means:", "opts": ["Ignored command", "Noise triggers command", "High confidence", "Clear accent"], "a": "Noise triggers command" },

{ "id": 206, "type": "mcq", "q": "NLP ambiguity exists because:", "opts": ["Fixed meaning", "Context dependent language", "Low threshold", "Deterministic tokens"], "a": "Context dependent language" },

{ "id": 207, "type": "mcq", "q": "OCR works by:", "opts": ["Processing sound", "Mapping pixels to characters", "Understanding meaning", "Reasoning"], "a": "Mapping pixels to characters" },

{ "id": 208, "type": "mcq", "q": "Hallucination means:", "opts": ["Noise", "Fluent but wrong output", "Threshold error", "Recognition failure"], "a": "Fluent but wrong output" },

{ "id": 209, "type": "mcq", "q": "Increasing speech threshold:", "opts": ["Reduces FP", "Reduces FN", "Improves extraction", "Reduces noise"], "a": "Reduces FP" },

{ "id": 210, "type": "mcq", "q": "Tokenization means:", "opts": ["Split text", "Increase threshold", "Reduce latency", "Convert speech"], "a": "Split text" },

{ "id": 211, "type": "tf", "q": "(True or False) Similar sounds increase recognition errors.", "a": "true" },
{ "id": 212, "type": "tf", "q": "(True or False) Grammar guarantees correctness.", "a": "false" },
{ "id": 213, "type": "tf", "q": "(True or False) Accent affects feature extraction.", "a": "true" },
{ "id": 214, "type": "tf", "q": "(True or False) OCR distinguishes characters easily in blur.", "a": "false" },
{ "id": 215, "type": "tf", "q": "(True or False) Language models verify truth.", "a": "false" },
{ "id": 216, "type": "tf", "q": "(True or False) Rapid speech reduces clarity.", "a": "true" },
{ "id": 217, "type": "tf", "q": "(True or False) Confidence equals correctness.", "a": "false" },
{ "id": 218, "type": "tf", "q": "(True or False) Speech depends on time sequence.", "a": "true" },
{ "id": 219, "type": "tf", "q": "(True or False) Hallucination increases without verification.", "a": "true" },
{ "id": 220, "type": "tf", "q": "(True or False) Confirmation reduces hallucination impact.", "a": "true" },

{ "id": 221, "type": "essay", "q": "(Short Answer) Why speech recognition is probabilistic?", "a": "Because audio varies and system predicts most likely output." },

{ "id": 222, "type": "essay", "q": "(Short Answer) How noise affects pipeline?", "a": "Distorts input and affects feature extraction." },

{ "id": 223, "type": "essay", "q": "(Short Answer) Why OCR fails in low contrast?", "a": "Edges become unclear." },

{ "id": 224, "type": "essay", "q": "(Short Answer) Why hallucination happens?", "a": "Model predicts tokens without verification." },

{ "id": 225, "type": "essay", "q": "(Short Answer) Threshold trade-off?", "a": "Higher reduces FP but increases FN." },

{ "id": 226, "type": "essay", "q": "(Short Answer) False Positive example in speech?", "a": "Noise triggers command." },

{ "id": 227, "type": "essay", "q": "(Short Answer) Increasing threshold effect?", "a": "Reduces FP, increases FN." },

{ "id": 228, "type": "essay", "q": "(Short Answer) Safe fallback behavior?", "a": "Ask for confirmation." },

{ "id": 229, "type": "essay", "q": "(Short Answer) What is data drift?", "a": "Change in data over time." },

{ "id": 230, "type": "essay", "q": "(Short Answer) Reduce hallucination?", "a": "Use verification or retrieval." },

{ "id": 231, "type": "essay", "q": "(Short Answer) Test noise vs system failure?", "a": "Compare noisy vs clean environment." },

{ "id": 232, "type": "essay", "q": "(Short Answer) Loudness vs phonetic test?", "a": "Change volume vs pronunciation." },

{ "id": 233, "type": "essay", "q": "(Short Answer) Why human oversight needed?", "a": "Because AI does not guarantee truth." },

{ "id": 234, "type": "essay", "q": "(Short Answer) Latency effect?", "a": "Delays output and simulates failure." },

{ "id": 235, "type": "essay", "q": "(Short Answer) OCR variation causes?", "a": "Lighting and blur changes." },

{ "id": 236, "type": "essay", "q": "(Short Answer) OCR vs speech difference?", "a": "OCR uses pixels, speech uses sound." },

{ "id": 237, "type": "essay", "q": "(Short Answer) False Positive vs Negative?", "a": "FP triggers wrong, FN ignores correct." },

{ "id": 238, "type": "essay", "q": "(Short Answer) Confidence in face vs NLP?", "a": "Face uses similarity, NLP uses probability." },

{ "id": 239, "type": "essay", "q": "(Short Answer) Deterministic vs probabilistic?", "a": "Deterministic fixed, probabilistic variable." },

{ "id": 240, "type": "essay", "q": "(Short Answer) Feature extraction vs tokenization?", "a": "Sound vs text processing." },

{ "id": 241, "type": "essay", "q": "(Short Answer) Distorted audio stage?", "a": "Input stage." },

{ "id": 242, "type": "essay", "q": "(Short Answer) Outdoor speech failure?", "a": "Input and model stage." },

{ "id": 243, "type": "essay", "q": "(Short Answer) OCR shadow failure?", "a": "Input stage." },

{ "id": 244, "type": "essay", "q": "(Short Answer) Intent failure stage?", "a": "Classification stage." },

{ "id": 245, "type": "essay", "q": "(Short Answer) Chatbot hallucination stage?", "a": "Prediction stage." },

{ "id": 246, "type": "mcq", "q": "Which depends on time?", "opts": ["OCR", "Speech", "Image", "Text"], "a": "Speech" },

{ "id": 247, "type": "mcq", "q": "Hallucination reduced by?", "opts": ["Noise", "Verification", "Threshold", "Pixels"], "a": "Verification" },

{ "id": 248, "type": "mcq", "q": "OCR input type?", "opts": ["Audio", "Pixels", "Text", "Vectors"], "a": "Pixels" },

{ "id": 249, "type": "mcq", "q": "Speech input type?", "opts": ["Pixels", "Sound", "Text", "Graph"], "a": "Sound" },

{ "id": 250, "type": "mcq", "q": "Confidence represents?", "opts": ["Truth", "Probability", "Certainty", "Error"], "a": "Probability" }

];