/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavDropdown } from 'react-bootstrap';

const propTypes = {
  locale: PropTypes.string.isRequired,
  onSelectLanguage: PropTypes.func
};

const availableLanguages = {
  "en": {"flag": "us", "name": "English"},
  "zh": {"flag": "cn", "name": "Chinese"},
}

export default function LanguagePicker({ locale, onSelectLanguage }) {
  return (
    <NavDropdown
      id="locale-dropdown"
      title={
        <span className="f16">
          <i className={`flag ${availableLanguages[locale].flag}`} />
        </span>
      }
    >
      {Object.keys(availableLanguages).map(langKey =>
        langKey === locale ? null : (
            <div className="dropdown">
                <div className="language-key" key={langKey} onClick={() => onSelectLanguage(langKey)}>
                    <div className="f16">
                    <i className={`flag ${availableLanguages[langKey].flag}`} />
                    {availableLanguages[langKey].name}
                    </div>
                </div>
            </div>
        ),
      )}
    </NavDropdown>
  );
}

LanguagePicker.propTypes = propTypes;
