import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardFooter from "../DashboardFooter";

export default function NewRepository() {


    const [toggleBtn, setToggleBtn] = useState(false);

    const licenses = [
        'No license',
        'Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License',
        'BSD 3-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        'Boot Software License 2.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0',
        'The Unlicense',
    ];

    const gitIgnoreList = [
        "No .gitignore",
        "AL",
        "Actionscript",
        "Ada",
        "AdventureGameStudio",
        "Agda",
        "Android",
        "Angular",
        "AppEngine",
        "AppceleratorTitanium",
        "ArchLinuxPackages",
        "Autotools",
        "Ballerina",
        "C",
        "C++",
        "CFWheels",
        "CMake",
        "CUDA",
        "CakePHP",
        "ChefCookbook",
        "Clojure",
        "Codelgniter",
        "Composer",
        "Concrete5",
        "Coq",
        "CraftCMS",
        "D",
        "DM",
        "Dart",
        "Delphi",
        "Dotnet",
        "Drupal",
        "EPiServer",
        "Eagle",
        "Elisp",
        "Elizir",
        "Elm",
        "Erlnag",
        "FlaxEngine",
        "Flutter",
        "ForceDotCom",
        "Fortran",
        "FuelPHP",
        "GWT",
        "Gcow",
        "GitHubPages",
        "Gleam",
        "Go",
        "Godot",
        "Gradle",
        "Grails",
        "HIP",
        "Haskell",
        "Haxe",
        "IAR",
        "IGORPro",
        "Idris",
        "JBoss",
        "JENKINS_HOME",
        "Java",
        "jekyll",
        "Joomla",
        "Julia",
        "Katalon",
        "KiCad",
        "Kohna",
        "Kotlin",
        "LabVIEW",
        "LangChain",
        "Laravel",
        "Leningen",
        "LemonStand",
        "Lilypond",
        "Lithium",
        "Lua",
        "Luau",
        "Magento",
        "Maven",
        "Mercury",
        "MetaProgrammingSystem",
        "Modelica",
        "Nanoc",
        "Nestjs",
        "Nextjs",
        "Nim",
        "Nix",
        "Node",
        "OCaml",
        "Objective-C",
        "Opa",
        "OpenCart",
        "OracleForms",
        "Packer",
        "Perl",
        "Phalcon",
        "PlayFramework",
        "Plone",
        "Prestashop",
        "Processing",
        "PureScript",
        "Python",
        "Qooxdoo",
        "Qt",
        "R",
        "ROS",
        "Racket",
        "Rails",
        "Raku",
        "ReScript",
        "RhodesRhombile",
        "Ruby",
        "Rust",
        "SCons",
        "SSDT-sqlproj",
        "Sass",
        "Scala",
        "Scheme",
        "Srivener",
        "SketchUp",
        "Smalltalk",
        "Solidity-Remix",
        "Stella",
        "SugarCRM",
        "Swift",
        "Symfony",
        "SymphonyCMS",
        "TeX",
        "Terraform",
        "TestComplete",
        "Textpattern",
        "TurboGears2",
        "TwinCAT3",
        "Typo3",
        "Unity",
        "UnrealEngine",
        "VBA",
        "VVVV",
        "VisualStudio",
        "Waf",
        "WordPress",
        "Xojo",
        "Yeoman",
        "Yii",
        "ZendFramework",
        "Zephir",
        "Zig",
        "ecu.test",
    ];



    return (
        <div className="create-new-repository-container">
            <div className="create-new-repo-title">
                <h2>Create a new repository</h2>
                <p>Repositories contain a project's files and version history. Have a project elsewhere? <Link to="#">Import a repository</Link><br /><i>Required fields are marked with an asterisk (*).</i></p>
            </div>

            <form className="create-new-repo-form-setting-container">
                <h3 className="create-new-repo-categories">General</h3>
                <div className="create-new-repo-name">
                    <div className="create-new-repo-control-form">
                        <label>Owner *</label>
                        <select >
                            <option>OurCodeCampus</option>
                        </select>
                    </div>
                    <p>/</p>
                    <div className="create-new-repo-control-form">
                        <label>Repository name *</label>
                        <input type="text" name="repo-create-name" id="repo-crete-name" autoComplete="off" />
                    </div>
                </div>
                <p className="suggested-text">Greate repository names are short and memorable. How about <span>solid-broccoil?</span></p>

                <div className="create-new-repo-control-form">
                    <label>Descriptions *</label>
                    <input type="text" autoComplete="off" />
                    <p style={{ marginTop: "0.5rem", fontSize: "1.5rem", marginBottom: "2rem" }}>0/350 characters</p>
                </div>

                <h3 className="create-new-repo-categories">Configuration</h3>

                <div className="create-new-repo-choose-visibility-box">
                    <div>
                        <h5>Choose visibility *</h5>
                        <p>Choose who can see and commit to this repository</p>
                    </div>
                    <select>
                        <option>Public</option>
                        <option>Private</option>
                    </select>
                </div>

                <div className="create-new-repo-addition-like-license-readme-container">
                    <div>
                        <div>
                            <h5>Add README</h5>
                            <p>Choose who can see and commit to this repository</p>
                        </div>

                        <div className="create-new-rep-gitignore-toggle-btn">
                            <button
                                className={`toggle-switch ${toggleBtn ? "on" : ""}`}
                                onClick={() => setToggleBtn(!toggleBtn)}
                                type="button"
                            >
                                <span className="toggle-thumb"></span>
                                <span className="toggle-text">
                                    {toggleBtn ? "On" : "Off"}
                                </span>
                            </button>
                        </div>
                    </div>
                    <hr className="divider-line" />
                    <div>
                        <div>
                            <h5>Add .gitignore</h5>
                            <p>README ca be used longer descriptions.</p>
                        </div>

                        <select>
                            {
                                gitIgnoreList.map((curLang, index) => {
                                    return (
                                        <option key={index}>
                                            <input type="checkbox" />
                                            <p>{curLang}</p>
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <hr className="divider-line" />
                    <div>
                        <div>
                            <h5>Add license</h5>
                            <p>License explain how others can use your code.</p>
                        </div>

                        <select>
                            {
                                licenses.map((license, index) => {
                                    return (
                                        <option key={index}>
                                            <input type="checkbox" />
                                            <p>{license}</p>
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="create-new-repo-btn-container">
                    <button className="create-new-repo-btn">Create repository</button>
                </div>
            </form>

            <DashboardFooter />

        </div >

    )
}