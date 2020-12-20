<template>
    <div class="algorithm">
        <h1>Algorithm</h1>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex flex-wrap">
                    <div class="col-6 d-flex flex-column align-items-center">
                        <h2>Applicant</h2>
                        <div style="width: 100px; display:flex; justify-content: center"
                             v-for="competence in this.applicant.competences"
                             :key="competence.id">
                            <span style="width: 100px; margin: 2px auto; padding: 2px; display: block"
                                  class="alert-info border border-info"
                                  v-show="!showField('name')"
                                  @click="focusField('name')">
                                {{competence.name}}
                            </span>

                            <input v-model="competence.name"
                                   v-show="showField('name')"
                                   type="text" class="form-control w-auto"
                                   @focus="focusField('name')"
                                   @blur="blurField"
                                   @keyup.enter="blurField">
                        </div>
                    </div>
                    <div class="col-6 d-flex flex-column">
                        <h2>Vacancy</h2>
                        <span style="width: 100px; margin: 2px auto; padding: 2px"
                              v-for="competence in this.vacancy.competences"
                              :key="competence.id"
                              :class="{'alert-success border border-success': primaryContainsCompetence(competence),
                               'alert-danger border border-danger': !primaryContainsCompetence(competence) && !secondaryContainsCompetence(competence),
                               'alert-warning border border-warning': !primaryContainsCompetence(competence) && secondaryContainsCompetence(competence)}"
                        >
                            {{competence.name}}
                        </span>
                    </div>
                    <div class="d-flex m-auto flex-column">
                        <button type="button" class="btn btn-success" @click="match">Match competences</button>

                        <span style="font-size: 20px; font-weight: 900" class="alert-success"
                              v-if="matchPercentage !== null"> {{ matchPercentage }}% match</span>

<!--                        <div>-->
<!--                            <h2>Applicant Primary competences</h2>-->
<!--                            <span v-for="comp in this.applicant.competences" :key="comp.id">-->
<!--                                {{comp.name}}-->
<!--                            -->
<!--                            <span v-for="child in comp.children" :key="child.id">-->
<!--                            {{child.name}}-->
<!--                            </span>-->
<!--                            </span>-->

<!--                        </div>-->
                    </div>

                    {{ this.applicant}}

                    <div class="col-12">
                        <div class="tf-tree example"
                             v-for="competence in this.competences" :key="competence.id">
                            <ul>
                                <li>
                                    <span class="tf-nc"
                                          :class="{
                                            'alert-success': primaryNodeMatch(competence.name),
                                            'alert-danger': !primaryNodeMatch(competence.name)}">
                                        {{ competence.name }}
                                    </span>
                                    <ul>
                                        <li v-for="(children, index) in competence.children" :key="index">
                                            <span class="tf-nc"
                                                  :class="{
                                            'alert-warning': secondaryNodeMatch(children.name),
                                            'alert-danger': !secondaryNodeMatch(children.name)}">
                                                {{ children.name }}
                                            </span>
                                            <ul v-if="children.subChildren">
                                                <li v-for="(child, i) in children.subChildren" :key="i">
                                                    <span class="tf-nc">{{ child.name }}</span>
                                                </li>
                                                <!--                                                <li>-->
                                                <!--                                                    <span class="tf-nc">5</span>-->
                                                <!--                                                    <ul>-->
                                                <!--                                                        <li><span class="tf-custom tf-nc">9</span></li>-->
                                                <!--                                                        <li><span class="tf-custom tf-nc">10</span></li>-->
                                                <!--                                                    </ul>-->
                                                <!--                                                </li>-->
                                                <!--                                                <li><span class="tf-nc">6</span></li>-->
                                            </ul>
                                        </li>
                                        <!--                                        <li>-->
                                        <!--                                            <span class="tf-nc">3</span>-->
                                        <!--                                            <ul>-->
                                        <!--                                                <li><span class="tf-nc">7</span></li>-->
                                        <!--                                                <li><span class="tf-nc">8</span></li>-->
                                        <!--                                            </ul>-->
                                        <!--                                        </li>-->
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Algorithm",

        data() {
            return {
                matchedCompetences: [],
                matchPercentage: null,
                editField: '',
                applicant: {
                    competences: [
                        {
                            id: 0,
                            name: 'HTML',
                            children: [{name: 'PHP'}, {name: 'CSS'}, {name: 'Wordpress'}, {name: 'Bootstrap'}, {name: 'BASS'}]
                        },
                        {
                            id: 1,
                            name: 'PHP',
                            children: [{name: 'Laravel'}, {name: 'Symphony'}, {name: 'Wordpress'}, {name: 'Drupal'}, {name: 'HTML'}]
                        },
                        // {
                        //     id: 2,
                        //     name: 'Symphony',
                        //     children: [{name: 'Laravel'}, {name: 'Symphony'}, {name: 'Wordpress'}, {name: 'Drupal'}, {name: 'HTML'}]
                        // },
                        // {
                        //     id: 3,
                        //     name: 'Laravel',
                        //     children: [{name: 'Laravel'}, {name: 'Symphony'}, {name: 'Wordpress'}, {name: 'Drupal'}, {name: 'HTML'}]
                        // },
                    ]
                    // competences: ['PHP', 'Laravel'],
                },
                vacancy: {
                    competences: [{name: 'Laravel'}, {name: 'Symphony'}, {name: 'Wordpress'}, {name: 'PHP'}, {name: 'HTML'}],
                    // competences: ['PHP', 'Laravel', 'HTML'],
                },
                competences: [
                    {
                        id: 0,
                        name: 'PHP',
                        children: [{name: 'Laravel'}, {name: 'Symphony'}, {name: 'Wordpress'}, {name: 'Drupal'}, {name: 'HTML'}]
                    },
                    {
                        id: 1,
                        name: 'HTML',
                        children: [{name: 'PHP'}, {name: 'CSS'}, {name: 'Wordpress'}, {name: 'Bootstrap'}, {name: 'SASS'}]
                    },
                    {
                        id: 2,
                        name: 'Laravel',
                        children: [{name: 'PHP'}, {
                            name: 'Blade',
                            subChildren: [{name: 'Laravel'}, {name: 'PHP'}, {name: 'Eloquent'}, {name: 'Templating'}, {name: 'Views'}]
                        }, {name: 'Eloquent'}, {name: 'MySQL'}, {name: 'API'}]
                    },
                ]
            }
        },
        methods: {
            primaryContainsCompetence(comp) {
                if (this.matchedCompetences.primary) {
                    return !!this.matchedCompetences.primary.includes(comp);
                }
            },
            secondaryContainsCompetence(comp) {
                if (this.matchedCompetences.secondary) {
                    return !!this.matchedCompetences.secondary.includes(comp);
                }
            },
            primaryNodeMatch(comp) {
                if (this.matchedCompetences.primary) {
                    return !!this.matchedCompetences.primary.some(i => i.name.includes(comp));
                }
            },
            secondaryNodeMatch(comp) {
                if (this.matchedCompetences.secondary) {
                    return !!this.matchedCompetences.secondary.some(i => i.name.includes(comp));
                }
            },
            match() {
                let applicant = this.applicant.competences;
                let vacancy = this.vacancy.competences;

                let primary = vacancy.filter(i =>
                    applicant.some(e =>
                        e.name === i.name)
                );

                let secondary = vacancy.filter(i => applicant.some(e => e.children.some(c => c.name === i.name)));

                let result = [];
                result['primary'] = primary;
                result['secondary'] = secondary;

                // console.log(applicant.some(e => e.name === i.name));
                // (applicant.some(a => a.children.some(t => t.name === i.name)))
                // if (applicant.some(a => a.children.some(t => t.name === i.name))) {
                //     return {'child': i};
                // }

                console.log(result);

                this.matchedCompetences = result;
                // this.matchPercentage = (((result['primary'].length + result['secondary'].length) / Object.keys(vacancy).length) * 100).toFixed(1);

                let totalPrimary = (result['primary'].length * 100);
                let totalSecondary = (result['secondary'].length * 15);

                this.matchPercentage = ((totalPrimary + totalSecondary) / Object.keys(vacancy).length).toFixed(2);
            },
            focusField(name) {
                this.editField = name;
            },
            blurField() {
                this.editField = '';
            },
            showField(name) {
                return (this.editField === name);
            }
        },
        computed: {
            // primaryContainsCompetence(needle) {
            //     if (this.matchedCompetences.primary) {
            //         return !!this.matchedCompetences.primary.includes(needle);
            //     }
            // }
        }
    }
</script>

<style>
    .algorithm {
        padding-top: 10%;
        text-align: center;
    }

    .tf-tree {
        overflow: visible;
        padding: 5% 0;
    }
</style>