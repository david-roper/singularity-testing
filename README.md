# singularity-testing
Messing around with Apptainer (formerly Singularity) containers

Version: Apptainer 1.5


singularity run \
-B $PWD/token_dataset:/token_dataset:ro \
-B $PWD/token_rabies_outputs:/token_rabies_outputs/ /scratch/ropdav/projects/singularity-testing/rabies_0.4.8.sif -p MultiProc --local_threads 6 \
preprocess /token_dataset/ /token_rabies_outputs \
--anatomical_resampling 1x1x1 \
--anat_inho_cor method=disable,otsu_thresh=2,multiotsu=false --bold_inho_cor method=disable,otsu_thresh=2,multiotsu=false \
--bold2anat_coreg registration=no_reg,masking=true,brain_extraction=true \
--commonspace_reg masking=false,brain_extraction=false,fast_commonspace=true,template_registration=no_reg --data_type int16


singularity run -it --rm --user $(id -u) \
-B $PWD/token_dataset:/token_dataset:ro \
-B $PWD/token_rabies_outputs:/token_rabies_outputs/ \
gabdesgreg/rabies:0.4.8 -p MultiProc --local_threads 6 \
confound_correction /token_rabies_outputs/ /token_rabies_outputs --conf_list mot_6

singularity run -it --rm --user $(id -u) \
-B $PWD/token_dataset:/token_dataset:ro \
-B $PWD/token_rabies_outputs:/token_rabies_outputs/ \
gabdesgreg/rabies:0.4.8 -p MultiProc --local_threads 6 \
analysis /token_rabies_outputs/ /token_rabies_outputs --data_diagnosis