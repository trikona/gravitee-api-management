/**
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.gravitee.repository.management.api;

import java.util.Collection;
import java.util.Optional;
import java.util.Set;

import io.gravitee.repository.exceptions.TechnicalException;
import io.gravitee.repository.management.model.Page;

/**
 * @author Titouan COMPIEGNE
 */
public interface PageRepository {

	Collection<Page> findPublishedByApi(String apiName) throws TechnicalException;

	Collection<Page> findByApi(String apiName) throws TechnicalException;
	
	Optional<Page> findByName(String name) throws TechnicalException;
	
	Page create(Page page) throws TechnicalException;
	
	Page update(Page page) throws TechnicalException;
	
	void delete(String name) throws TechnicalException;
	
	Integer findMaxPageOrderByApiName(String apiName) throws TechnicalException;
}
